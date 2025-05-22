import React, { useState } from "react";
import EmailInput from "./EmailInput";

const EventCard = ({ event }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex gap-4 items-start'>
      <img
        src={event.image}
        alt={event.title}
        className='w-24 h-24 rounded-md object-cover'
      />
      <div className='flex-1'>
        <h3 className='text-lg font-semibold'>{event.title}</h3>
        <p className='text-sm text-gray-600'>{event.description}</p>
        <p className='text-sm text-gray-500 mt-1'>
          📅{" "}
          {event.date
            ? new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Date not specified"}
        </p>
        <p className='text-sm text-gray-500'>📍 {event.location}</p>

        {showInput ? (
          <EmailInput eventId={event._id} />
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className='mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition'
          >
            Find tickets
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
