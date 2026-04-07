import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookSortingHeader from './BookSortingHeader';
import BookCard from './BookCard';

const Books = () => {
    const { readList, wishlist } = useContext(BookContext);
    const [sortingType, setSortingType] = useState(""); 
    
    // States to hold the sorted lists for UI
    const [displayReadList, setDisplayReadList] = useState([]);
    const [displayWishlist, setDisplayWishlist] = useState([]);

    // Logic for Sorting (Ascending)
    useEffect(() => {
        const sortData = (data) => {
            let sorted = [...data];
            
            if (sortingType === "Rating") {
                // Ascending: 4.2 -> 4.5 -> 4.8
                sorted.sort((a, b) => a.rating - b.rating);
            } 
            else if (sortingType === "Number of pages") {
                sorted.sort((a, b) => a.totalPages - b.totalPages);
            }
            else if (sortingType === "Publisher year") {
                sorted.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            }
            
            return sorted;
        };

        setDisplayReadList(sortData(readList));
        setDisplayWishlist(sortData(wishlist));
    }, [sortingType, readList, wishlist]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* 1. Header with Sorting Type Updater */}
            <BookSortingHeader setSortingType={setSortingType} />

            <Tabs className="mt-8">
                <TabList className="flex border-b border-gray-200 mb-8">
                    <Tab>Read Books</Tab>
                    <Tab >Wishlist Books</Tab>
                </TabList>

                {/* 2. Read List Panel - mapping sorted data */}
                <TabPanel>
                    {displayReadList.length > 0 ? (
                        displayReadList.map(book => <BookCard key={book.bookId} book={book} />)
                    ) : (
                        <p className="text-center py-10 border border-dashed rounded-xl text-xl font-semibold">No books read yet! 📚</p>
                    )}
                </TabPanel>

                {/* 3. Wishlist Panel - mapping sorted data */}
                <TabPanel>
                    {displayWishlist.length > 0 ? (
                        displayWishlist.map(book => <BookCard key={book.bookId} book={book} />)
                    ) : (
                        <p className="text-center py-10 border border-dashed rounded-xl text-xl font-semibold">Your wishlist is empty! ✨</p>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;