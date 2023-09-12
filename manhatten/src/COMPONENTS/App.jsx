import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NAVIGATION/Navigation'
import Main from './MAIN/Main';
import Posters from './POSTERS/Posters';
import FeaturePage from './FEATURE_PAGE/FeaturePage';
import Poster from './POSTER/Poster';
import Menu from './MENU/Menu';
import Gallery from './GALLERY/Gallery';
import WhyWe from './WHY_WE/WhyWe';
import Booking from './BOOKING/Booking';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/posters" element={<Posters/>}></Route>
        <Route path="/poster/:id" element={<Poster/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/news" element={<WhyWe/>}></Route>
        <Route path="/bookings" element={<Booking/>}></Route>
        <Route path="/featurepage" element={<FeaturePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App