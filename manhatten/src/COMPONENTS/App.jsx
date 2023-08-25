import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NAVIGATION/Navigation'
import Main from './MAIN/Main';
import Posters from './POSTERS/Posters';
import FeaturePage from './FEAURE_PAGE/FeaturePage';
import Poster from './POSTERE/Poster';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/menu"></Route>
        <Route path="/posters" element={<Posters/>}></Route>
        <Route path="/poster/:id" element={<Poster/>}></Route>
        <Route path="/gallery"></Route>
        <Route path="/news"></Route>
        <Route path="/bookings"></Route>
        <Route path="/featurepage" element={<FeaturePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App