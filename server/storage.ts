import { 
  users, type User, type InsertUser,
  messages, type Message, type InsertMessage,
  documents, type Document, type InsertDocument,
  type FAQEntry, type DocumentChunk
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  // User methods (keeping existing)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Message methods
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesByConversationId(conversationId: string): Promise<Message[]>;
  
  // Document methods
  addDocument(document: InsertDocument): Promise<Document>;
  getDocumentsByType(type: string): Promise<Document[]>;
  searchDocuments(query: string): Promise<DocumentChunk[]>;
  
  // FAQ methods
  getFAQs(): Promise<FAQEntry[]>;
  getFAQsByCategory(category: string): Promise<FAQEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Message[];
  private documents: Document[];
  private faqs: FAQEntry[];
  private documentChunks: DocumentChunk[];
  currentUserId: number;
  currentMessageId: number;
  currentDocumentId: number;

  constructor() {
    this.users = new Map();
    this.messages = [];
    this.documents = [];
    this.faqs = [];
    this.documentChunks = [];
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentDocumentId = 1;
  }

  // User methods (keeping existing)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Message methods
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const message: Message = { 
      ...insertMessage, 
      id, 
      timestamp: new Date() 
    };
    this.messages.push(message);
    return message;
  }
  
  async getMessagesByConversationId(conversationId: string): Promise<Message[]> {
    return this.messages.filter(
      (message) => message.conversationId === conversationId
    );
  }
  
  // Document methods
  async addDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = this.currentDocumentId++;
    const document: Document = { ...insertDocument, id };
    this.documents.push(document);
    return document;
  }
  
  async getDocumentsByType(type: string): Promise<Document[]> {
    return this.documents.filter(doc => doc.type === type);
  }
  
  async searchDocuments(query: string): Promise<DocumentChunk[]> {
    try {
      // In a real implementation, this would use NLP or a search index
      // For now, basic string matching for the memory storage
      const normalizedQuery = query.toLowerCase();
      const results = this.documentChunks.filter(chunk => 
        chunk.content.toLowerCase().includes(normalizedQuery) ||
        chunk.source.toLowerCase().includes(normalizedQuery)
      );
      
      // Sort by relevance (more matches = higher relevance)
      return results.sort((a, b) => {
        const aMatches = (a.content.toLowerCase().match(new RegExp(normalizedQuery, 'g')) || []).length;
        const bMatches = (b.content.toLowerCase().match(new RegExp(normalizedQuery, 'g')) || []).length;
        return bMatches - aMatches;
      });
    } catch (error) {
      console.error('Error in searchDocuments:', error);
      return [];
    }
  }
  
  // FAQ methods
  async getFAQs(): Promise<FAQEntry[]> {
    return this.faqs;
  }
  
  async getFAQsByCategory(category: string): Promise<FAQEntry[]> {
    return this.faqs.filter(faq => faq.category === category);
  }
  
  // Helper method to load data (not part of interface)
  loadDocumentChunks(chunks: DocumentChunk[]): void {
    this.documentChunks = chunks;
  }
  
  loadFAQs(faqEntries: FAQEntry[]): void {
    this.faqs = faqEntries;
  }
}

export const storage = new MemStorage();
