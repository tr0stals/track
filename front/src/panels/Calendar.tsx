import React, { useState } from 'react';
import { Panel, Button, Div, HorizontalScroll } from '@vkontakte/vkui';
import { format, addDays, addWeeks, isToday } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

const CalendarPanel = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handlePrevWeek = () => {
    setSelectedDate(prev => addWeeks(prev, -1));
  };

  const handleNextWeek = () => {
    setSelectedDate(prev => addWeeks(prev, 1));
  };

  const handleDateClick = (date: Date) => {
    if (date.getTime() !== selectedDate.getTime()) {
      setSelectedDate(date);
    }
  };

  // Определяем массив дней недели с учетом выбранной даты
  const daysOfWeek = [...Array(7)].map((_, index) => addDays(selectedDate, index));

  return (
    <Panel id="calendar" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
      <Div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px' }}>
        <Button mode="tertiary" size="s" onClick={handlePrevWeek} style={{ color: '#B388FF', minWidth: '3px' }}>&lt;</Button>
        <HorizontalScroll style={{ flex: '1', overflowX: 'hidden' }}>
          <div style={{ display: 'flex' }}>
            {daysOfWeek.map((day, index) => {
              const today = isToday(day);
              const isSelected = selectedDate.getTime() === day.getTime();
              const isCurrentDay = today; // Проверяем, является ли день сегодняшним
              const dotColor = isSelected ? 'white' : '#B388FF'; // Цвет точки
              return (
                <div key={index} style={{ padding: '8px', textAlign: 'center', flex: '1', position: 'relative', color: isSelected ? 'white' : 'black', backgroundColor: isSelected ? '#B388FF' : 'transparent', borderRadius: '8px', cursor: 'pointer' }} onClick={() => handleDateClick(day)}>
                  <div style={{ fontSize: '16px', fontWeight: today ? 'bold' : 'normal', marginBottom: '5px', color: isSelected ? 'white' : '#B388FF' }}>
                    {format(day, 'd', { locale: ru })}
                  </div>
                  <div style={{ color: isSelected ? 'white' : '#818C99', fontSize: '12px' }}>
                    {format(day, 'EE', { locale: ru })}
                  </div>
                  {isCurrentDay && <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: dotColor }} />} {/* Отображаем точку или черточку под сегодняшним днем */}
                </div>
              );
            })}
          </div>
        </HorizontalScroll>
        <Button mode="tertiary" size="m" onClick={handleNextWeek} style={{ color: '#B388FF', minWidth: '3px' }}>&gt;</Button>
      </Div>
    </Panel>
  );
};

export default CalendarPanel;
