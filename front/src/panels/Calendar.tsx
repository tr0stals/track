import React, { useState } from 'react';
import { Panel, Button, Div, HorizontalScroll } from '@vkontakte/vkui';
import { format, startOfWeek, addWeeks, addDays, isToday } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

const CalendarPanel = () => {
  const [selectedWeekStart, setSelectedWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const handlePrevWeek = () => {
    setSelectedWeekStart(prev => addWeeks(prev, -1));
  };

  const handleNextWeek = () => {
    setSelectedWeekStart(prev => addWeeks(prev, 1));
  };

  // Определяем массив дней недели с учетом выбранной даты
  const daysOfWeek = [...Array(7)].map((_, index) => addDays(selectedWeekStart, index));

  // Переносим выделенный день в начало массива, если он не является первым элементом
  const selectedDayIndex = daysOfWeek.findIndex(day => isToday(day));
  if (selectedDayIndex !== -1 && selectedDayIndex !== 0) {
    const selectedDay = daysOfWeek[selectedDayIndex];
    daysOfWeek.splice(selectedDayIndex, 1);
    daysOfWeek.unshift(selectedDay);
  }

  return (
    <Panel id="calendar" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
      <Div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px' }}>
        <Button mode="tertiary" size="s" onClick={handlePrevWeek} style={{ color: '#B388FF', minWidth: '3px' }}>&lt;</Button>
        <HorizontalScroll style={{ flex: '1', overflowX: 'hidden' }}>
          <div style={{ display: 'flex' }}>
            {daysOfWeek.map((day, index) => {
              const today = isToday(day);
              const isSelected = today;
              return (
                <div key={index} style={{ padding: '8px', textAlign: 'center', flex: '1', position: 'relative', color: isSelected ? 'white' : 'black', backgroundColor: isSelected ? '#B388FF' : 'transparent', borderRadius: '8px' }}>
                  <div style={{ fontSize: '16px', fontWeight: today ? 'bold' : 'normal', marginBottom: '10px', color: isSelected ? 'white' : '#B388FF' }}>
                    {format(day, 'd', { locale: ru })}
                  </div>
                  <div style={{ color: isSelected ? 'white' : '#818C99', fontSize: '12px' }}>
                    {format(day, 'EE', { locale: ru })}
                  </div>
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
