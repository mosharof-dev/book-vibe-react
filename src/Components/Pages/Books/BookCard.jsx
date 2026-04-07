import React from 'react';
import { HiOutlineLocationMarker, HiOutlineUsers } from "react-icons/hi";
import { MdOutlineStickyNote2 } from "react-icons/md";

const BookCard = ({ book }) => {
  const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div className="border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row gap-6 mb-6">
      {/* Book Image Section */}
      <div className="bg-[#f3f3f3] flex justify-center items-center rounded-2xl p-6 md:w-57">
        <img src={image} alt={bookName} className="h-44 object-contain shadow-lg" />
      </div>

      {/* Book Details Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
        <p className="text-gray-600 font-medium mb-4">By : {author}</p>

        {/* Tags and Year */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex gap-3 items-center">
            <span className="font-bold">Tag</span>
            {tags?.map((tag, index) => (
              <span key={index} className="text-[#23BE0A] bg-[#23be0a0d] px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <HiOutlineLocationMarker className="text-xl" />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher and Page Info */}
        <div className="flex flex-wrap gap-6 text-gray-500 mb-4 border-b pb-4">
          <div className="flex items-center gap-2">
            <HiOutlineUsers className="text-xl" />
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineStickyNote2 className="text-xl" />
            <span>Page {totalPages}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-[#328eff26] text-[#328EFF] px-5 py-2 rounded-full font-medium">
            Category: {category}
          </span>
          <span className="bg-[#ffac3326] text-[#FFAC33] px-5 py-2 rounded-full font-medium">
            Rating: {rating}
          </span>
          <button className="bg-[#23BE0A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1a9d08] transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;