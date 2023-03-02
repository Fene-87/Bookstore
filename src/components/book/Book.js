import { useDispatch, useSelector } from 'react-redux';
import './Book.css';

const Book = ({
  id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="bookContainer">
      <div className="details">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
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
