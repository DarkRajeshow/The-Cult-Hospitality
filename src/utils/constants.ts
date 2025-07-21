// src/utils/constants.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);

export const BRAND_COLORS = {
  deepBlue: '#0033CC',
  skyBlue: '#00AEEF',
  white: '#FFFFFF',
  black: '#000000',
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