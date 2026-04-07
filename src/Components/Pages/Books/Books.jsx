import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';


const Books = () => {
    const { storeBooks, setStoreBooks,   readList,
    wishlist} = useContext(BookContext)
        console.log(  storeBooks, setStoreBooks, 'contexBook ');
    return (
        <div>
          <h1>Read List: {readList.length}</h1>
          <h1>Read List: {wishlist.length}</h1>
        </div>
    );
};

export default Books;