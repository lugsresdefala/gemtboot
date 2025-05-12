import { FAQEntry } from "@/types";

/**
 * Fetch FAQs from the server
 * @param category Optional category to filter FAQs
 */
export async function fetchFAQs(category?: string): Promise<FAQEntry[]> {
  try {
    const url = category 
      ? `/api/faqs?category=${encodeURIComponent(category)}` 
      : '/api/faqs';
    
    const response = await fetch(url, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

/**
 * Search documents with a query
 * @param query Search query term
 */
export async function searchDocuments(query: string) {
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching documents:', error);
    return [];
  }
}
