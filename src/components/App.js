
import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar.js';
import { RestuarantList } from './RestaurantList.js';
import { SearchBar } from './SearchForm.js';
import data from './data/restaraunts.json';
import { Footer } from './Footer.js';
import RestaurantPage from './About.js';
import { RestaurantDetail } from './RestaurantDetail.js';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { AddPage } from './AddRestaurant.js';
import { FavoriteRestaurant } from './Favorite.js';
import restaurant from './data/restaraunts.json';

export default App;

function App(props) {

  const [restaurantArray, setRestaurantArray] = useState(restaurant);

  const addRestaurant = (name, address, type, description) => {
    const newRestaurant = {
      name : name,
      address : address,
      type : type,
      description : description
    }

    const newRestaurantArray = [...restaurantArray, newRestaurant];
    setRestaurantArray (newRestaurantArray);
    
  } 

  return (
    <div className="container-fluid search text-light px-0 pt-5">
      <NavigationBar />
      <SearchBar data = {data}/>
      <Routes>
        <Route path="featured" element={<RestuarantList />} />
        <Route path="add" element={<AddPage />}/>
        <Route path="favorite" element={<FavoriteRestaurant data={data}/>} />
        <Route path="about" element={<RestaurantPage />}>
          <Route path=":restaurantName" element={<RestaurantDetail />}/>
        <Route path="favorite" element={<FavoriteRestaurant />} />
        </Route>
        <Route path="*" element={<Navigate to="/featured" />}/>
      </Routes>
      <Footer />
    </div>
  );
}
