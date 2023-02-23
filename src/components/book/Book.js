import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [state, setState] = useState('');
  return (
    <section className="bookContainer">
      <div className="details">
        <h4>Action</h4>
        <h3>The Hunger Games</h3>
        <p>Suzanne Collins</p>
        <ul className="comments">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>

      <div className="progress">
        <div className="spinner">
          <div className="spinnerIcon" />
          <div className="spinnerText">
            <p className="percentage">64%</p>
            <p className="completed">completed</p>
          </div>
        </div>

        <div className="borderLine" />

        <div className="chapter">
          <p className="currentChapter">Current Chapter</p>
          <p className="chapterNo">Chapter 17</p>
          <button className="updateButton" type="button">Update Progress</button>
        </div>
      </div>
    </section>
  );
};

export default Book;
