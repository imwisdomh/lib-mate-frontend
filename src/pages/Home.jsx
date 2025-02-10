import { useState } from 'react';
import styled from 'styled-components';
import Seat from '@/components/Seat';
import Navigation from '@/components/Navigation';
import { firstFloorSeats, secondFloorSeats } from '@/data/seats';

const Home = () => {
  const [floor, setFloor] = useState(1);

  const renderSeats = (seatNumbers) =>
    seatNumbers.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((seat, seatIndex) =>
          seat === null ? <Gap key={seatIndex} /> : <Seat key={seatIndex} number={seat} />
        )}
      </Row>
    ));

  const floorSeats = {
    1: firstFloorSeats,
    2: secondFloorSeats,
  };

  return (
    <Container>
      <Navigation />
      <Content>
        <FloorSelection>
          <h2>{floor}층 좌석 배치도</h2>
          <ButtonGroup>
            <FloorButton onClick={() => setFloor(1)}>1층</FloorButton>
            <FloorButton onClick={() => setFloor(2)}>2층</FloorButton>
          </ButtonGroup>
        </FloorSelection>
        <SeatGrid>{renderSeats(floorSeats[floor])}</SeatGrid>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 150px;
  margin-bottom: 70px;
`;

const FloorSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 121px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 10px 20px;
  background-color: white;

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    top: 60px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const FloorButton = styled.button`
  margin: 0 10px;
  padding: 7px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const SeatGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 60px;
  width: 100%;
  max-width: 1024px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: flex;
  min-width: 800px;
  justify-content: space-between;
`;

const Gap = styled.div`
  width: 30px;
  height: 30px;
`;
