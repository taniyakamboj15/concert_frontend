import React, { useState } from "react";
import EmailInput from "./EmailInput";

const FeaturedEventBanner = ({
  featuredEvents,
  currentIndex,
  setCurrentIndex,
}) => {
  const [showEmail, setShowEmail] = useState(false);
  const event = featuredEvents[currentIndex];

  return (
    <div className='relative mb-8 rounded-lg overflow-hidden shadow-lg h-96'>
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10'></div>
      <img
        src={event.image}
        alt={event.title}
        className='w-full h-full object-cover object-center'
      />
      <div className='absolute bottom-0 left-0 p-6 z-20 text-white'>
        <h3 className='text-2xl font-bold mb-1'>{event.title}</h3>
        <p className='text-lg mb-2'>
          {event.date &&
            new Date(event.date).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
        </p>
        <p className='text-sm mb-4'>📍 {event.location}</p>

        {showEmail ? (
          <EmailInput eventId={event._id} />
        ) : (
          <button
            onClick={() => setShowEmail(true)}
            className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition'
          >
            Find tickets
          </button>
        )}
      </div>

      <div className='absolute bottom-4 right-4 flex gap-2 z-20'>
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEventBanner;
