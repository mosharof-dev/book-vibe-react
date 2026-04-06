import React from 'react';

import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    return (
<div>
<Link to={`/bookDetails/${book.bookId}`}  className="card h-full bg-base-100 border border-gray-200 p-6  shadow-sm hover:shadow-md transition-shadow ">
            
            {/* Image Section */}
    <figure className="bg-base-200 py-8 rounded-2xl">
        <img src={book.image} alt={book.bookName} className="h-40 object-cover drop-shadow-lg hover:scale-105 transition-transform duration-300 " />
    </figure>
            
    <div className="card-body px-0 pb-0">
        
        {/* Tags */}
        <div className="flex justify-between gap-3">
            {book.tags.map((tag, i) => (
                <span key={i} className="text-[#23BE0A] bg-[#23BE0A1A] px-4 py-1 rounded-full text-sm font-medium">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* Title & Author */}
        <h2 className="card-title text-2xl font-bold mt-2 text-gray-900">
            {book.bookName}
        </h2>
        <p className="text-gray-500 font-medium">By : {book.author}</p>
        
        {/* Footer - Dashed border */}
        <div className="flex justify-between items-center border-t-2 border-dashed border-gray-200 mt-4 pt-4 text-gray-600 font-medium">
            <span>{book.category}</span>
            <div className="flex items-center gap-2">
                <span>{book.rating}</span>
                <FaRegStar className="text-xl" />
            </div>
        </div>

    </div>
</Link >
            
</div>
    );
};

export default BookCard;