import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('nature')}>Nature</button>
      <button onClick={() => setFilter('city')}>City</button>
    </div>
  );
};

export default Filter;
