import Navigation from '@/components/Navigation';
import styled from 'styled-components';

const SeatManagement = () => {
  return (
    <>
      <MySeat>test</MySeat>
      <Navigation />
    </>
  );
};

export default SeatManagement;

const MySeat = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;
