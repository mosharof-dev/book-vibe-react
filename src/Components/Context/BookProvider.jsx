import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Common notification style (optional)
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  };

  // Logic for Mark as Read
  const handleMarkAsRead = (book) => {
    const isAlreadyRead = readList.find((b) => b.bookId === book.bookId);

    if (isAlreadyRead) {
      toast.warn(`" ${book.bookName} " is already in your Read List! 📚`, toastConfig);
    } else {
      setReadList([...readList, book]);
      // Wishlist theke remove kore deya bhalo jodi read list e add hoy
      setWishlist(wishlist.filter((b) => b.bookId !== book.bookId));
      toast.success(`Excellent! " ${book.bookName} " added to Read List. ✅`, toastConfig);
    }
  };

  // Logic for Wishlist
  const handleWishlist = (book) => {
    const isAlreadyRead = readList.find((b) => b.bookId === book.bookId);
    const isAlreadyInWishlist = wishlist.find((b) => b.bookId === book.bookId);

    if (isAlreadyRead) {
      toast.info(`You've already finished " ${book.bookName} ". No need to wishlist! 📖`, toastConfig);
      return;
    }

    if (isAlreadyInWishlist) {
      toast.error(`" ${book.bookName} " is already in your Wishlist! ❤️`, toastConfig);
    } else {
      setWishlist([...wishlist, book]);
      toast.success(`Added " ${book.bookName} " to your Wishlist! ✨`, toastConfig);
    }
  };

  const contextInfo = {
    readList,
    wishlist,
    handleMarkAsRead,
    handleWishlist,
    setReadList,
    setWishlist
  };

  return (
    <BookContext.Provider value={contextInfo}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;