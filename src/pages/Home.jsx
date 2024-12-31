import { useState } from 'react';
import Navigation from '@/components/Navigation';

const Home = () => {
  const [floor, setFloor] = useState(1);

  const handleFloorChange = (floor) => {
    setFloor(floor);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => handleFloorChange(1)}>1층</button>
          <button onClick={() => handleFloorChange(2)}>2층</button>
        </div>
        <div>
          <h2>{floor}층</h2>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
