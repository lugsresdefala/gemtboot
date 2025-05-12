import { pgTable, text, serial, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users (keeping the existing table)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Messages
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(), // 'user' or 'assistant'
  content: text("content").notNull(),
  source: text("source").default(''),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  conversationId: text("conversation_id").notNull(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  timestamp: true,
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

// Documents
export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // 'faq', 'flow', 'criteria', etc.
  metadata: json("metadata").$type<Record<string, any>>().default({}),
});

export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
});

export type InsertDocument = z.infer<typeof insertDocumentSchema>;
export type Document = typeof documents.$inferSelect;

// Message query schema for searching/responding
export const messageQuerySchema = z.object({
  query: z.string().min(1, "O conteúdo da mensagem é obrigatório"),
  conversationId: z.string().default(() => crypto.randomUUID()),
});

export type MessageQuery = z.infer<typeof messageQuerySchema>;

// FAQ entry schema
export const faqEntrySchema = z.object({
  question: z.string(),
  answer: z.string(),
  source: z.string(),
  category: z.string().optional(),
});

export type FAQEntry = z.infer<typeof faqEntrySchema>;

// Document chunk schema for NLP processing
export const documentChunkSchema = z.object({
  content: z.string(),
  source: z.string(),
  metadata: z.record(z.any()).optional(),
});

export type DocumentChunk = z.infer<typeof documentChunkSchema>;
