import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Auth from '@/pages/Auth';
import Board from '@/pages/Board';
import SeatManagement from '@/pages/SeatManagement';
import '@/styles/reset.css';
import '@/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/board" element={<Board />} />
        <Route path="/seat-management" element={<SeatManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
