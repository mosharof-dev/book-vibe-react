import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const BookSortingHeader = ({ setSortingType }) => { // Destructure setSortingType here
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort By");

  const sortOptions = ["Rating", "Number of pages", "Publisher year"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectSort = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
    setSortingType(option); // Updates sortingType in Parent (Books.jsx)
  };

  return (
    <div className="bg-white p-4 md:p-10 font-sans">
      <div className="bg-[#f3f3f3] text-black text-center py-6 md:py-12 rounded-2xl mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold">Books</h1>
      </div>

      <div className="flex justify-center relative">
        <div className="relative w-full max-w-xs sm:w-auto">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between gap-3 bg-[#2ccb1a] text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-300 ease-in-out hover:bg-[#25b115] w-full md:w-auto"
          >
            {selectedSort}
            {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-[#f3f3f3] rounded-xl shadow-lg z-10 border border-gray-200">
              <ul className="text-center py-2">
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelectSort(option)}
                    className="px-6 py-3 cursor-pointer text-lg text-gray-800 hover:bg-gray-200 transition first:rounded-t-xl last:rounded-b-xl"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSortingHeader;