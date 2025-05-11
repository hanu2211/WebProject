import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DogPage from './components/DogPage';
import CatPage from './components/CatPage';
import RabbitPage from './components/RabbitPage';
import BirdPage from './components/BirdPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/rabbit" element={<RabbitPage />} />
        <Route path="/bird" element={<BirdPage />} />
      </Routes>
    </Router>
  );
}

export default App;