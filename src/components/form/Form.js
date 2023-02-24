import React from 'react';
import './Form.css';

const Form = () => (
  <section className="formContainer">
    <h2 className="header">Add New Book</h2>
    <form className="bookForm">
      <input className="bookTitle" type="text" placeholder="Book title" />
      <input className="author" type="text" placeholder="Author" />
      <button className="addBook" type="submit">Add Book</button>
    </form>
  </section>
);

export default Form;
