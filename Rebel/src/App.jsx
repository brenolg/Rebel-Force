import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './pages/Home';
import Game from './pages/Game';
import WinPage from './pages/WinPage';
import LosePage from './pages/LosePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="/lose" element={<LosePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
