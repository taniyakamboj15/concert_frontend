import { BASE_URL } from "./constant";

export const requestTicket = async ({ email, eventId }) => {
  const res = await fetch(`${BASE_URL}event/${eventId}/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
};
