import React from 'react';

function EventList({ events }) {
  if (!events.length) {
    return <p className='text-center text-gray-500'>No events found for the selected category.</p>;
  }

  return (
    <div className='grid gap-6'>
      {events.map(event => (
        <div key={event.id} className='bg-white p-6 rounded-lg shadow hover:shadow-md transition'>
          <h2 className='text-2xl font-semibold text-blue-700'>{event.title}</h2>
          <p className='text-sm text-gray-500 mb-1'>{event.category} • {event.date}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
