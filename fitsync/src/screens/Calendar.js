import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for calendar styles

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  // Handler for when a user clicks on a date
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Calendar View</h2>
      <Calendar
        onChange={handleDateChange} // Update date when user selects a day
        value={date}               // Pass the selected date
      />
    </div>
  );
};

export default CalendarView;
