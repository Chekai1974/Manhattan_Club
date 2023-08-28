import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NAVIGATION/Navigation'
import Main from './MAIN/Main';
import Posters from './POSTERS/Posters';
import FeaturePage from './FEATURE_PAGE/FeaturePage';
import Poster from './POSTER/Poster';
import Menu from './MENU/Menu';
import Product from './PRODUCT/Product';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/menu/:id" element={<Product/>}></Route>
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