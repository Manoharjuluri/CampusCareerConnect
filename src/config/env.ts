/**
 * Environment configuration
 * Access environment variables with type safety
 */

export const env = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://f04or36zm8.execute-api.ca-central-1.amazonaws.com/career",
  
  // Meta Pixel Configuration
  META_PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID || "720718777655354",
  
  // Environment
  NODE_ENV: import.meta.env.MODE || "development",
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;

// Validate required environment variables in production
if (env.IS_PRODUCTION) {
  const requiredVars: string[] = [];
  
  if (!import.meta.env.VITE_API_BASE_URL) {
    console.warn("VITE_API_BASE_URL not set, using default");
  }
  
  if (!import.meta.env.VITE_META_PIXEL_ID) {
    console.warn("VITE_META_PIXEL_ID not set, using default");
  }
}

