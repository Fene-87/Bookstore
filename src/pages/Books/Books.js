import React from 'react';
import Book from '../../components/book/Book';
import Form from '../../components/form/Form';
import Navbar from '../../components/Navbar/Navbar';
import './Books.css';

const Books = () => {
  const bookDetails = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },

    {
      title: 'Dune',
      author: 'Frank Herbert',
    },

    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <div className="booksContainer">
      <Navbar />
      <section className="booksSection">
        <Book details={bookDetails[0]} />
        <Book details={bookDetails[1]} />
        <Book details={bookDetails[2]} />
        <div className="borderLine" />
        <Form />
      </section>
    </div>
  );
};

export default Books;
