import React, { useState } from 'react';

interface TimePickerProps {
  onChange?: (hours: number, minutes: number) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setHours(value);
    console.log(`Selected time: ${value}:${minutes}`);
    onChange && onChange(value, minutes);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setMinutes(value);
    console.log(`Selected time: ${hours}:${value}`);
    onChange && onChange(hours, value);
  };

  const generateOptions = (maxValue: number) => {
    return Array.from({ length: maxValue }, (_, i) => i);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', width: '200px', height: '50px', overflow: 'hidden', borderRadius: '8px' }}>
      <select
        onChange={handleHoursChange}
        style={{ flex: 1, borderRadius: '8px', height: '100%', fontSize: '16px', backgroundColor: '#EBEDF0', color: 'black', paddingLeft: '8px', border: '1px solid #CED0D4' }}
      >
        {generateOptions(24).map((hour) => (
          <option key={hour} value={hour} style={{ minHeight: '30px' }}>
            {hour}
          </option>
        ))}
      </select>
      <p style={{ color: 'black' }}>:</p>
      <select
        onChange={handleMinutesChange}
        style={{ flex: 1, borderRadius: '8px', height: '100%', fontSize: '16px', backgroundColor: '#EBEDF0', color: 'black', paddingLeft: '8px', border: '1px solid #CED0D4' }}
      >
        {generateOptions(60).map((minute) => (
          <option key={minute} value={minute} style={{ minHeight: '30px' }}>
            {minute}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
