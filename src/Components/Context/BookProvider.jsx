import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { 
  addToStoredReadList, 
  getStoredReadList, 
  addToStoredWishlist,     
  getStoredWishlist,      
  removeFromStoredWishlist 
} from '../../Routes/Utils/LocalDB';


export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  
  useEffect(() => {
    setReadList(getStoredReadList());
    setWishlist(getStoredWishlist());
  }, []);

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  };

  // Logic for Mark as Read
  const handleMarkAsRead = (book) => {
    const isAlreadyRead = readList.find((b) => b.bookId === book.bookId);

    if (isAlreadyRead) {
      toast.warn(`"${book.bookName}" is already in your Read List! 📚`, toastConfig);
    } else {
      // 1. Update State
      setReadList([...readList, book]);
      const updatedWishlist = wishlist.filter((b) => b.bookId !== book.bookId);
      setWishlist(updatedWishlist);

      // 2. Update Local Storage
      addToStoredReadList(book);
      removeFromStoredWishlist(book.bookId);

      toast.success(`Excellent! "${book.bookName}" added to Read List. ✅`, toastConfig);
    }
  };

  // Logic for Wishlist
  const handleWishlist = (book) => {
    const isAlreadyRead = readList.find((b) => b.bookId === book.bookId);
    const isAlreadyInWishlist = wishlist.find((b) => b.bookId === book.bookId);

    if (isAlreadyRead) {
      toast.info(`You've already finished "${book.bookName}". No need to wishlist! 📖`, toastConfig);
      return;
    }

    if (isAlreadyInWishlist) {
      toast.error(`"${book.bookName}" is already in your Wishlist! ❤️`, toastConfig);
    } else {
      // 1. Update State
      setWishlist([...wishlist, book]);
      
      // 2. Update Local Storage
      addToStoredWishlist(book);

      toast.success(`Added "${book.bookName}" to your Wishlist! ✨`, toastConfig);
    }
  };

  const contextInfo = {
    readList,
    wishlist,
    handleMarkAsRead,
    handleWishlist,
  };

  return (
    <BookContext.Provider value={contextInfo}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;