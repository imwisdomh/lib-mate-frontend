import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Board from '@/pages/Board';
import SeatManagement from '@/pages/SeatManagement';
import '@/styles/reset.css';
import '@/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/seat-management" element={<SeatManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
