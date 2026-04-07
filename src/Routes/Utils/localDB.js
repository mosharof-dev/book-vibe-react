// LocalDB.js

// 1. Get Read List
const getStoredReadList = () => {
    const allReadList = localStorage.getItem('readList');
    return allReadList ? JSON.parse(allReadList) : [];
};

// 2. Add to Read List
const addToStoredReadList = (book) => {
    const getAllBooks = getStoredReadList();
    const isExist = getAllBooks.find(bk => bk.bookId === book.bookId);
    if (!isExist) {
        getAllBooks.push(book);
        localStorage.setItem('readList', JSON.stringify(getAllBooks));
    }
};

// 3. Get Wishlist
const getStoredWishlist = () => {
    const allWishlist = localStorage.getItem('wishlist');
    return allWishlist ? JSON.parse(allWishlist) : [];
};

// 4. Add to Wishlist
const addToStoredWishlist = (book) => {
    const getAllWishlist = getStoredWishlist();
    const isExist = getAllWishlist.find(bk => bk.bookId === book.bookId);
    if (!isExist) {
        getAllWishlist.push(book);
        localStorage.setItem('wishlist', JSON.stringify(getAllWishlist));
    }
};

// 5. Remove from Wishlist 
const removeFromStoredWishlist = (id) => {
    const getAllWishlist = getStoredWishlist();
    const remaining = getAllWishlist.filter(bk => bk.bookId !== id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
};


export { 
    getStoredReadList, 
    addToStoredReadList, 
    getStoredWishlist, 
    addToStoredWishlist, 
    removeFromStoredWishlist 
};