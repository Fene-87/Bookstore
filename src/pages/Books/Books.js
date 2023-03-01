import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/Book';
import Form from '../../components/form/Form';
import Navbar from '../../components/Navbar/Navbar';
import './Books.css';

const Books = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div className="booksContainer">
      <Navbar />
      <section className="booksSection">
        {books.map((item) => (
          <Book key={item.itemId} {...item} />
        ))}
        <Form />
      </section>
    </div>
  );
};

export default Books;
