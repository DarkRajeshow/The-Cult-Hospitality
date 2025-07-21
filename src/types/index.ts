// src/types/index.ts
import type { BlogPost } from '../lib/api';

export interface User {
    _id: string;
    name: string;
    email: string;
    token: string;
    createdAt?: string;
}

export interface Blog {
    _id: string;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
}

export interface Inquiry {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
    status?: 'pending' | 'resolved';
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

// Server response types
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    count?: number;
}

export type InquiriesResponse = ApiResponse<Inquiry[]> & { count: number };
export type InquiryResponse = ApiResponse<Inquiry>;
export type PostsResponse = ApiResponse<BlogPost[]> & { count: number };
export type PostResponse = ApiResponse<BlogPost>;
export type DeletePostResponse = ApiResponse<null> & { message: string };

export interface AuthApiResponse {
    success: boolean;
    data: {
        _id: string;
        name: string;
        email: string;
        token: string;
    };
}