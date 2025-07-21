import axios from "axios";

// Base URL from environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            console.log("sdf");
            
            // localStorage.removeItem('auth_token');
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Contact form interfaces
interface ContactFormData {
    name: string;
    email: string;
    mobileNumber: string;
    message: string;
}

interface ContactFormResponse {
    success: boolean;
    message: string;
}

// Blog interfaces
export interface BlogPost {
    _id: string;
    title: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt?: string;
}

export interface BlogByIdResponse {
    data: BlogPost;
    success: number;
}

export interface BlogsResponse {
    data: BlogPost[];
    total: number;
    page: number;
    limit: number;
}

// =========================
// REUSABLE API REQUEST FUNCTION
// =========================

async function apiRequest<T>(request: () => Promise<any>, errorMsg: string): Promise<T> {
    try {
        const response = await request();
        return response.data;
    } catch (error) {
        console.error(errorMsg, error);
        throw error;
    }
}

// =========================
// CONTACT API FUNCTIONS
// =========================

/**
 * Submit contact form data
 * @param data - Contact form data containing name, email, and message
 * @returns Promise<ContactFormResponse>
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
    return apiRequest(
        () => api.post('/contact', data),
        'Contact form submission error:'
    );
}

// =========================
// BLOG API FUNCTIONS
// =========================

/**
 * Fetch all blog posts
 * @param page - Page number (optional)
 * @param limit - Number of posts per page (optional)
 * @returns Promise<BlogsResponse>
 */
export async function fetchAllBlogs(page: number = 1, limit: number = 10): Promise<BlogsResponse> {
    return apiRequest(
        () => api.get(`/public/posts?page=${page}&limit=${limit}`),
        'Fetch blogs error:'
    );
}

/**
 * Fetch a single blog post by ID
 * @param id - Blog post ID
 * @returns Promise<BlogPost>
 */
export async function fetchBlogById(id: string): Promise<BlogByIdResponse> {
    return apiRequest(
        () => api.get(`/public/posts/${id}`),
        'Fetch blog by ID error:'
    );
}

/**
 * Fetch a single blog post by slug
 * @param slug - Blog post slug
 * @returns Promise<BlogPost>
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogByIdResponse> {
    return apiRequest(
        () => api.get(`/public/posts/slug/${slug}`),
        'Fetch blog by slug error:'
    );
}

/**
 * Search blog posts
 * @param query - Search query
 * @param page - Page number (optional)
 * @param limit - Number of posts per page (optional)
 * @returns Promise<BlogsResponse>
 */
export async function searchBlogs(
    query: string,
    page: number = 1,
    limit: number = 10
): Promise<BlogsResponse> {
    return apiRequest(
        () => api.get(`/public/posts/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`),
        'Search blogs error:'
    );
}

/**
 * Fetch blog posts by tag
 * @param tag - Tag name
 * @param page - Page number (optional)
 * @param limit - Number of posts per page (optional)
 * @returns Promise<BlogsResponse>
 */
export async function fetchBlogsByTag(
    tag: string,
    page: number = 1,
    limit: number = 10
): Promise<BlogsResponse> {
    return apiRequest(
        () => api.get(`/public/posts/tag/${tag}?page=${page}&limit=${limit}`),
        'Fetch blogs by tag error:'
    );
}

// =========================
// UTILITY FUNCTIONS
// =========================

/**
 * Check API health
 * @returns Promise<{status: string, timestamp: string}>
 */
export async function checkApiHealth(): Promise<{ status: string, timestamp: string }> {
    return apiRequest(
        () => api.get('/health'),
        'API health check error:'
    );
}

/**
 * Generic API error handler
 * @param error - Axios error object
 * @returns Formatted error message
 */
export function handleApiError(error: any): string {
    if (error.response) {
        // Server responded with error status
        return error.response.data?.message || `Server error: ${error.response.status}`;
    } else if (error.request) {
        // Request was made but no response received
        return 'Network error: Unable to connect to server';
    } else {
        // Something else happened
        return error.message || 'An unexpected error occurred';
    }
}

export default api;