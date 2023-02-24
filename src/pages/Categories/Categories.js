import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Categories.css';

const Categories = () => (
  <div className="categoriesContainer">
    <Navbar />
    <button className="status" type="button">Check Status</button>
  </div>
);

export default Categories;
