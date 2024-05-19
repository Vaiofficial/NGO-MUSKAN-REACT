import React from 'react';
import EventList from '../components/EventList';

const Events = () => {
  return (
    <div className="events-page bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>
      <EventList />
    </div>
  );
};

export default Events;
