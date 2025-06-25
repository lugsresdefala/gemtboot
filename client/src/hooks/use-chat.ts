import { useState, useEffect, useCallback } from "react";
import { Message, ChatResponse } from "@/types";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string>(() =>
    crypto.randomUUID(),
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch messages for the current conversation
  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(`/api/messages/${conversationId}`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar mensagens");
        }

        const data = (await response.json()) as Message[];

        // Sort messages by timestamp (oldest first)
        data.sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        );

        setMessages(data);
      } catch (error) {
        console.error(
          "Error fetching messages for conversation:",
          conversationId,
          error,
        );
      }
    }

    if (conversationId) {
      fetchMessages();
    }
  }, [conversationId]);

  // Send a message to the chat
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      setIsLoading(true);

      try {
        // Post message to API
        const res = await apiRequest("POST", "/api/chat", {
          query: content,
          conversationId,
        });

        const data = (await res.json()) as ChatResponse;

        // Update messages with the new message and response
        setMessages((prev) => [
          ...prev,
          data.userMessage,
          data.assistantMessage,
        ]);

        // Invalidate query cache for this conversation
        queryClient.invalidateQueries({
          queryKey: [`/api/messages/${conversationId}`],
        });
      } catch (error) {
        console.error("Failed to send message:", content, "Error:", error);
        toast({
          title: "Erro ao enviar mensagem",
          description:
            "Houve um problema ao processar sua mensagem. Por favor, tente novamente.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [conversationId, toast],
  );

  // Clear the current conversation
  const clearConversation = useCallback(() => {
    const newConversationId = crypto.randomUUID();
    setConversationId(newConversationId);
    setMessages([]);
  }, []);

  return {
    messages,
    sendMessage,
    clearConversation,
    isLoading,
    conversationId,
  };
}
