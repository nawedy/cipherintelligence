declare namespace App {
  interface CMSContent {
    id: number;
    title: string;
    content: string;
    content_type: 'blog' | 'news' | 'research';
    created_at: string;
    updated_at: string;
  }

  interface APIResponse<T> {
    data: T;
    error?: string;
  }

  interface UserSession {
    id: number;
    email: string;
    role: 'admin' | 'editor';
    exp: number;
  }
} 