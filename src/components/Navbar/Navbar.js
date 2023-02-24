import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const navigation = useNavigate();

  const handleBookPage = () => {
    navigation('/');
  };

  const handleCategoriesPage = () => {
    navigation('/categories');
  };

  return (
    <nav className="navContainer">
      <div className="links">
        <h2 className="logo">Bookstore CMS</h2>
        <ul className="navLinks">
          <li onClick={handleBookPage} className="books">Books</li>
          <li onClick={handleCategoriesPage} className="categories">Categories</li>
        </ul>
      </div>
      <div className="userCircle">
        <FontAwesomeIcon icon={faUser} className="user" />
      </div>
    </nav>
  );
};

export default Navbar;
