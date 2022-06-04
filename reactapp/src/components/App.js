
import React from 'react';
import { NavigationBar } from './NavigationBar.js';
import { RestuarantList } from './RestaurantList.js';
import { SearchBar } from './SearchForm.js';
import data from './data/restaraunts.json';
import { Footer } from './Footer.js';
import { Routes, Route } from 'react-router-dom';
//import restaurant from './data/restaraunts.json';

export default App;

function App(props) {
  return (
    <div className="container-fluid search text-light px-0 pt-5">
      <NavigationBar />
      <SearchBar data = {data}/>
      <Routes>
        <Route />
      </Routes>
      <RestuarantList />
      <Footer />
    </div>
  );
}
