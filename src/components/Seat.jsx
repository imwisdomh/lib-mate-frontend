import { useState } from 'react';

const Seat = () => {
  const [seatStatus, setSeatStatus] = useState('empty');

  const handleClick = () => {
    if (seatStatus === 'empty') {
      setSeatStatus('reserved');
    } else if (seatStatus === 'reserved') {
      setSeatStatus('occupied');
    } else {
      setSeatStatus('empty');
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: seatStatus === 'empty' ? 'lightgreen' : seatStatus === 'reserved' ? 'yellow' : 'red' }}
    ></button>
  );
};

export default Seat;
