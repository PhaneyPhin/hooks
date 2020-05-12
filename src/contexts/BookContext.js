import React, { createContext, useReducer,useEffect } from 'react'
import { bookReducer } from '../reducers/BookReducer';

//create Book Context
export const BookContext = createContext();
//initial state
var storage=localStorage.getItem('books');
storage=storage?JSON.parse(storage):[];
const initialBooks = storage;
/**
 * Provid Book Data
 */
const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(bookReducer,initialBooks);
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
    },[books]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
