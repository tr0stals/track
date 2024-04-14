import React from 'react';
import { Calendar } from '@vkontakte/vkui';

const MyFullCalendar = () => {
  const calendarStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px', 
  };

  return (
    <div style={calendarStyles}>
      <Calendar />
    </div>
  );
};

export default MyFullCalendar;
