// Type definitions for MIRA chat interface

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: MessageContent[];
  timestamp: Date;
}

export type MessageContent = 
  | TextContent
  | StatusContent
  | TableContent
  | ProgressContent
  | LoadingContent;

export interface TextContent {
  type: 'text';
  text: string;
}

export interface StatusContent {
  type: 'status';
  text: string;
}

export interface TableContent {
  type: 'table';
  title?: string;
  rows: string[];
}

export interface ProgressContent {
  type: 'progress';
  label: string;
  percentage: number;
  estimatedTime?: string;
}

export interface LoadingContent {
  type: 'loading';
}

export interface SuggestionChip {
  id: string;
  text: string;
}

export interface Conversation {
  id: string;
  title: string;
  isActive: boolean;
  messages: Message[];
  suggestionChips: SuggestionChip[][];
}

export interface UserProfile {
  name: string;
  role: string;
  initials: string;
}

export interface EmptyStateButton {
  id: string;
  text: string;
}
