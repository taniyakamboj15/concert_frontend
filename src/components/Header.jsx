import React from "react";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className='bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50'>
      <div
        className='text-3xl font-bold tracking-wide'
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
          Event
        </span>
        <span className='ml-2 text-blue-700 dark:text-white'>Hunt</span>
      </div>

      <div className='text-gray-600 dark:text-gray-200 hover:text-blue-500 transition cursor-pointer'>
        <User className='h-6 w-6' />
      </div>
    </header>
  );
};

export default Header;
