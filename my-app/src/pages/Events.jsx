import React from 'react';
import EventList from '../components/EventList';

const Events = () => {
  return (
    <div className="events-page bg-gray-100 min-h-screen py-20">
      <div className="flex justify-center"> {/* Added flex justify-center class here */}
        <h1 className="text-4xl font-extrabold text-center mb-10 text-subHeadingBlue font-montserrat nav-link uppercase">Upcoming Events</h1>
      </div>
      <EventList />
    </div>
  );
};

export default Events;
