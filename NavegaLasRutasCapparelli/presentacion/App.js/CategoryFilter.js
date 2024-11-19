import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = ({ categories }) => {
  return (
    <div>
      <h3>Filtrar por categoría:</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;