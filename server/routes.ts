import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { messageQuerySchema, insertMessageSchema } from "@shared/schema";
import { loadInitialData } from "./services/document-processing";
import { generateResponse } from "./services/natural-language-processing";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Load initial data from documents
  await loadInitialData();
  
  // API endpoint to get messages from a conversation
  app.get("/api/messages/:conversationId", async (req, res) => {
    try {
      const conversationId = req.params.conversationId;
      const messages = await storage.getMessagesByConversationId(conversationId);
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting messages:", error);
      res.status(500).json({ message: "Erro ao buscar mensagens" });
    }
  });
  
  // API endpoint to send a message and get a response
  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = messageQuerySchema.parse(req.body);
      const { query, conversationId } = validatedData;
      
      // Store user message
      const userMessage = await storage.createMessage({
        role: "user",
        content: query,
        conversationId,
        source: "",
      });
      
      // Generate assistant response
      const responseData = await generateResponse(query);
      
      // Store assistant message
      const assistantMessage = await storage.createMessage({
        role: "assistant",
        content: responseData.content,
        conversationId,
        source: responseData.source || "",
      });
      
      // Return both messages
      res.status(200).json({
        userMessage,
        assistantMessage
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Dados inválidos",
          errors: error.errors
        });
      }
      
      console.error("Error in chat endpoint:", error);
      res.status(500).json({ message: "Erro ao processar sua mensagem" });
    }
  });
  
  // API endpoint to get FAQs
  app.get("/api/faqs", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const faqs = category 
        ? await storage.getFAQsByCategory(category)
        : await storage.getFAQs();
      
      res.status(200).json(faqs);
    } catch (error) {
      console.error("Error getting FAQs:", error);
      res.status(500).json({ message: "Erro ao buscar perguntas frequentes" });
    }
  });
  
  // API endpoint to search documents
  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      
      if (!query || query.trim() === "") {
        return res.status(400).json({ message: "É necessário informar um termo de busca" });
      }
      
      const results = await storage.searchDocuments(query);
      res.status(200).json(results);
    } catch (error) {
      console.error("Error searching documents:", error);
      res.status(500).json({ message: "Erro ao buscar nos documentos" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
