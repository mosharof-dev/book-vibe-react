
import React, { use } from 'react'; 
import BookCard from '../UI/BookCard';
const allBooksPromise = fetch("/booksData.json").then(res => res.json())

const AllBooks = () => {
    const books = use(allBooksPromise);

    return (
        <div className="max-w-7xl mx-auto px-4 my-12">
            <h2 className='text-3xl font-bold text-center mb-10'>Books</h2>
            
            {/* Grid layout: Mobile e 1 ta, Tablet e 2 ta, Desktop e 3 ta */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map((book, index) => (
                        // Card Container
                     <BookCard key={index} book={book}/>
                    ))
                }
            </div>
        </div>
    );
};

export default AllBooks;