export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://concert-show.onrender.com/api/"
    : "http://localhost:5000/api/";
