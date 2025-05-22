import React, { useState } from "react";
import { requestTicket } from "../utils/ticketUtils";

const EmailInput = ({ eventId }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) return setError("Email is required");
    if (!emailRegex.test(email)) return setError("Invalid email address");

    setError("");
    try {
      const data = await requestTicket({ email, eventId });
      if (data.redirectUrl) window.location.href = data.redirectUrl;
    } catch (err) {
      console.error("Request failed:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className='mt-3 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className='border border-gray-300 rounded-md px-3 py-1 text-sm w-64'
        />
        <button
          onClick={handleSubmit}
          className='bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition'
        >
          Continue
        </button>
      </div>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default EmailInput;
