import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { postBooks } from '../../redux/features/books/booksSlice';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const newCategory = 'Action';

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(postBooks(
      {
        item_id: uniqid(),
        title: newTitle,
        author: newAuthor,
        category: newCategory,
      },
    ));
  };

  return (
    <section className="formContainer">
      <h2 className="header">Add New Book</h2>
      <form className="bookForm">
        <input
          className="bookTitle"
          type="text"
          placeholder="Book title"
          required
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          required
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button
          className="addBook"
          type="submit"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default Form;
