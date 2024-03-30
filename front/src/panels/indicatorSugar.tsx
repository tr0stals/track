import React, { useState } from 'react';

interface NumberInputFieldProps {
  style?: React.CSSProperties;
}

const IndicatorSugar: React.FC<NumberInputFieldProps> = ({ style }) => {
  const [number, setNumber] = useState<string>('5.5'); // начальное значение числа

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setNumber(value);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingRight: '35px' }}>
        <input
          type="text"
          inputMode="decimal"
          value={number}
          onChange={handleChange}
          style={{
            borderRadius: '30px',
            backgroundColor: '#A393F5',
            border: '2px solid transparent', // установка рамки
            padding: '0px',
            width: '139px',
            height: '41px',
            textAlign: 'center',
            fontSize: '20px',
            marginLeft: '105px',
            outline: 'none', // убираем стандартное выделение при фокусе
          }}
          // псевдокласс :focus для изменения стиля при активации
          onFocus={(e) => e.target.style.border = '2px solid #792EC0'}
          onBlur={(e) => e.target.style.border = '2px solid transparent'}
        />
        {/* SVG-иконка карандаша */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4476 5.10134L2.65743 14.8916C2.43395 15.115 2.3084 15.4181 2.3084 15.7342L2.3084 17.5836C2.3084 17.6434 2.3569 17.6919 2.41673 17.6919H4.26609C4.58214 17.6919 4.88525 17.5663 5.10873 17.3429L14.8989 7.55264L12.4476 5.10134ZM13.8265 3.72248L16.2778 6.17378L17.5034 4.94813C17.7573 4.69429 17.7573 4.28273 17.5034 4.02889L15.9714 2.49683C15.7175 2.24298 15.306 2.24298 15.0521 2.49683L13.8265 3.72248ZM1.27857 13.5127L13.6733 1.11797C14.6886 0.102604 16.3349 0.102605 17.3502 1.11797L18.8823 2.65003C19.8977 3.6654 19.8977 5.31163 18.8823 6.32699L6.48759 18.7217C5.89841 19.3109 5.09932 19.6419 4.26609 19.6419L2.41673 19.6419C1.27995 19.6419 0.358399 18.7203 0.358399 17.5836L0.358398 15.7342C0.358398 14.901 0.689393 14.1019 1.27857 13.5127Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default IndicatorSugar;
