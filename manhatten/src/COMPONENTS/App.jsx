import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NAVIGATION/Navigation'
import Main from './MAIN/Main';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/menu"></Route>
        <Route path="/posters"></Route>
        <Route path="/gallery"></Route>
        <Route path="/news"></Route>
        <Route path="/bookings"></Route>
      </Routes>
    </Router>
  );
}

export default App