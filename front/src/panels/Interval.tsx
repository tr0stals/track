import React, { useState } from 'react';
import { Panel, Button, Div, HorizontalScroll } from '@vkontakte/vkui';

const Interval = () => {
  const [selectedSlide, setSelectedSlide] = useState<number>(1);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handlePrevSlide = () => {
    setSelectedSlide(prev => (prev > 1 ? prev - 7 : prev));
  };

  const handleNextSlide = () => {
    setSelectedSlide(prev => (prev + 7 < 28 ? prev + 7 : prev));
  };

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  return (
    <Panel id="calendar" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
      <Div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px' }}>
        <Button mode="tertiary" size="s" onClick={handlePrevSlide} style={{ color: '#B388FF', minWidth: '3px' }}>&lt;</Button>
        <HorizontalScroll style={{ flex: '1', overflowX: 'hidden' }}>
          <div style={{ display: 'flex' }}>
            {[...Array(7)].map((_, index) => {
              const currentSlide = selectedSlide + index;
              const isSelected = selectedNumber === currentSlide;
              return (
                <div key={index} style={{ padding: '8px', textAlign: 'center', flex: '1', position: 'relative', color: isSelected ? 'white' : 'black', backgroundColor: isSelected ? '#B388FF' : 'transparent', borderRadius: '8px', cursor: 'pointer' }} onClick={() => handleNumberClick(currentSlide)}>
                  <div style={{ fontSize: '16px', fontWeight: isSelected ? 'bold' : 'normal', marginBottom: '5px', color: isSelected ? 'white' : '#B388FF' }}>
                    {currentSlide}
                  </div>
                </div>
              );
            })}
          </div>
        </HorizontalScroll>
        <Button mode="tertiary" size="m" onClick={handleNextSlide} style={{ color: '#B388FF', minWidth: '3px' }}>&gt;</Button>
      </Div>
    </Panel>
  );
};

export default Interval;
