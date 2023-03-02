import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/book/Book';
import Form from '../../components/form/Form';
import Navbar from '../../components/Navbar/Navbar';
import { fetchBooks } from '../../redux/features/books/booksSlice';
import './Books.css';

const Books = () => {
  const { books, status } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  return (
    <div className="booksContainer">
      <Navbar />
      <section className="booksSection">
        {books.map((item) => (
          <Book key={item.id} {...item} />
        ))}
        <Form />
      </section>
    </div>
  );
};

export default Books;
