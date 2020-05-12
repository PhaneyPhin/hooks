import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';
const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length? (
        <div className='book-list'>
            <ul>
            {books.map((book,index)=>{
                return (
                    <BookDetail book={book} key={index} index={index}></BookDetail>
                )
            })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read. Hello free time :)</div>
    )
}

export default BookList;
