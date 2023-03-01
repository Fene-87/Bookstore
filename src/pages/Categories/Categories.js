import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/features/categories/categoriesSlice';
import Navbar from '../../components/Navbar/Navbar';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categoriesContainer">
      <Navbar />
      <button
        className="status"
        type="button"
        onClick={handleCheckStatus}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
