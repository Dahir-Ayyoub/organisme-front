import React from "react";

const EventList = ({ events, onShowAbsentList }) => {
  return (
    <div className="mt-4">
      {events.map((event, index) => (
        <div key={index} className="flex items-center justify-between p-2 border-b">
          <span>{event.title}</span>
          <button
            onClick={onShowAbsentList}
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Show Absents
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;