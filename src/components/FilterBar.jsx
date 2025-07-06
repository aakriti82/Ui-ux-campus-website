import React from 'react';

function FilterBar({ current, setFilter }) {
  const categories = ['All', 'Academic', 'Sports', 'Music'];

  return (
    <div className='flex justify-center gap-4 mb-8'>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`
            px-4 py-2 rounded-full border 
            ${current === cat ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}
            hover:opacity-80 transition
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
