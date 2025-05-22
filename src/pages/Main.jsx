import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { BASE_URL } from "../utils/constant";
import FeaturedEventBanner from "../components/FeaturedEventBanner";

const Main = () => {
  const [events, setEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchEvents = async (pageNumber = 1) => {
    try {
      const res = await fetch(`${BASE_URL}events?page=${pageNumber}`);
      const data = await res.json();
      setEvents(data.events);
      setTotalPages(data.totalPages);
      setPage(data.page);

      setFeaturedEvents(data.events.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch events", err);
    }
  };

  useEffect(() => {
    fetchEvents(page);
  }, [page]);

  useEffect(() => {
    if (featuredEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentFeaturedIndex(
          (prevIndex) => (prevIndex + 1) % featuredEvents.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [featuredEvents]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className='p-6 px-40 bg-[#f4f4f4] min-h-screen'>
      <h2 className='text-3xl font-bold mb-6'>Concerts </h2>

      {/* Featured Event Banner */}
      {featuredEvents.length > 0 && (
        <FeaturedEventBanner
          featuredEvents={featuredEvents}
          currentIndex={currentFeaturedIndex}
          setCurrentIndex={setCurrentFeaturedIndex}
        />
      )}

      {/* Regular Event Listing */}
      <h3 className='text-3xl font-bold my-6'>whats's on</h3>
      <div className='space-y-4'>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center items-center gap-4 mt-10'>
        <button
          className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50'
          onClick={handlePrev}
          disabled={page === 1}
        >
          ⬅️ Prev
        </button>
        <span className='font-semibold'>
          Page {page} of {totalPages}
        </span>
        <button
          className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50'
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Main;
