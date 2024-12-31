import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Auth from '@/pages/Auth';
import Board from '@/pages/Board';
import SeatManagement from '@/pages/SeatManagement';
import Settings from '@/pages/Settings';
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
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
