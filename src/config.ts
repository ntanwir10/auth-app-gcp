export const config = {
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
} as const;

// Validate required environment variables
if (!config.googleClientId) {
  throw new Error(
    "VITE_GOOGLE_CLIENT_ID environment variable is required. Please check your .env file."
  );
}
