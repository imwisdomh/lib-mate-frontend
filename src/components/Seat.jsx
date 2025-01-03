import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Seat = ({ number }) => {
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
    <SeatButton onClick={handleClick} status={seatStatus}>
      {number}
    </SeatButton>
  );
};

Seat.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Seat;

const SeatButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.status === 'empty' ? 'lightgreen' : props.status === 'reserved' ? 'yellow' : 'red'};
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
