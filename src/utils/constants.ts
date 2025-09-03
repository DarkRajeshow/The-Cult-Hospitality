// src/utils/constants.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);

export const BRAND_COLORS = {
  // Primary brand color - deep blue for professionalism
  primary: '#1e3a8a', // blue-800
  primaryLight: '#3b82f6', // blue-500
  primaryDark: '#1e40af', // blue-700
  primaryLighter: '#dbeafe', // blue-100
  primaryLightest: '#eff6ff', // blue-50
  
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#6b7280', // gray-500
  grayLight: '#f3f4f6', // gray-100
  grayDark: '#374151', // gray-700
} as const;

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  BLOG_LIST: '/blogs',
  CREATE_BLOG: '/blogs/create',
  EDIT_BLOG: '/blogs/edit',
  INQUIRIES: '/inquiries',
  INQUIRY_DETAIL: '/inquiries',
} as const;

// Consistent business stats
export const SUCCESS_RATE = "95.5%";
export const CASES_SOLVED = "1000+";