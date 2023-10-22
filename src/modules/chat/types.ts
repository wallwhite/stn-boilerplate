export interface ChatMessage {
  createdAt: string;
  author?: {
    name?: string;
  };
  isLoading?: boolean;
}
