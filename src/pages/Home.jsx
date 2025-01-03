import { useState } from 'react';
import styled from 'styled-components';
import Seat from '@/components/Seat';
import Navigation from '@/components/Navigation';

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

  const firstFloorSeats = [
    [1, 2, 3, 4, 5, 6, null, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [30, 29, 28, 27, 26, 25, null, 24, 23, 22, 21, 20, 19, 18, 17, 16],
    [null],
    [31, 32, 33, 34, 35, 36, null, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [60, 59, 58, 57, 56, 55, null, 54, 53, 52, 51, 50, 49, 48, 47, 46],
    [null],
    [61, 62, 63, 64, 65, 66, null, 67, 68, 69, 70, 71, 72, 73, 74, 75],
    [90, 89, 88, 87, 86, 85, null, 84, 83, 82, 81, 80, 79, 78, 77, 76],
    [null],
    [91, 92, 93, 94, 95, 96, null, 97, 98, 99, 100, 101, 102, 103, 104, 105],
    [120, 119, 118, 117, 116, 115, null, 114, 113, 112, 111, 110, 109, 108, 107, 106],
    [null],
    [121, 122, 123, 124, 125, 126, null, 127, 128, 129, 130, 131, 132, 133, 134, 135],
    [150, 149, 148, 147, 146, 145, null, 144, 143, 142, 141, 140, 139, 138, 137, 136],
    [null],
    [null, null, null, null, null, 172, 171, null, 166, 165, null, 160, 159, null, 154, 153],
    [null, null, null, null, null, 173, 170, null, 167, 164, null, 161, 158, null, 155, 152],
    [null, null, null, null, null, 174, 169, null, 168, 163, null, 162, 157, null, 156, 151],
  ];

  const secondFloorSeats = [
    [23, null, 22, 21, 20, 19, 18, 17, null, 16, 15, 14, 13, 12, 11, 10, null, null, 9],
    [24, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [25, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 8],
    [26, null, 54, 55, null, 56, null, null, 73, null, 74, null, 75, null, 78, null, 79, null, null],
    [27, null, null, null, null, 57, null, null, 72, null, 76, null, 77, null, 80, null, 81, null, 7],
    [28, null, 52, 53, null, 58, null, null, 71, null, 82, null, 83, null, 86, null, 87, null, null],
    [29, null, null, null, null, 59, null, null, 70, null, 84, null, 85, null, 88, null, 89, null, 6],
    [30, null, 50, 51, null, 60, null, null, 69, null, 90, null, 91, null, 94, null, 95, null, null],
    [31, null, null, null, null, 61, null, null, 68, null, 92, null, 93, null, 96, null, 97, null, 5],
    [32, null, 48, 49, null, 62, null, null, null, null, 98, null, 99, null, 102, null, 103, null, null],
    [33, null, null, null, null, 63, null, null, null, null, 100, null, 101, null, 104, null, 105, null, 4],
    [34, null, 46, 47, null, 64, null, null, 67, null, 106, null, 107, null, 110, null, 111, null, null],
    [35, null, null, null, null, 65, null, null, 66, null, 108, null, 109, null, 112, null, 113, null, 3],
    [36, null, 44, 45, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [37, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    [38, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [39, null, 40, null, 41, null, 42, null, 43, null, null, null, null, null, null, null, null, null, 1],
  ];

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
  cursor: pointer;
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
  padding: 0 10px;
  box-sizing: border-box;
  overflow-x: auto;
  scrollbar-width: thin;
  justify-content: flex-start;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  min-width: 800px;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-between;
  padding: 0 10px;
`;

const Gap = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;
