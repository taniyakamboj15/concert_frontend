export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.example.com"
    : "http://localhost:5000/api/";
