import React from 'react';
import Book from '../../components/book/Book';
import Navbar from '../../components/Navbar/Navbar';
import './Books.css';

const Books = () => (
  <div className="booksContainer">
    <Navbar />
    <section className="booksSection">
      <Book />
      <Book />
      <Book />
    </section>
  </div>
);

export default Books;
