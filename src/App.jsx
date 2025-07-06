import React, { useState } from 'react';
import EventList from './components/EventList';
import FilterBar from './components/FilterBar';
import eventsData from './data/events.json';

function App() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All'
    ? eventsData
    : eventsData.filter(event => event.category === filter);

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      <header className='bg-blue-600 text-white py-4 shadow'>
        <h1 className='text-3xl font-bold text-center'>Campus Connect</h1>
        <p className='text-center text-sm'>Find and follow student life events</p>
      </header>
      <main className='max-w-4xl mx-auto py-8 px-4'>
        <FilterBar current={filter} setFilter={setFilter} />
        <EventList events={filteredEvents} />
      </main>
    </div>
  );
}

export default App;
