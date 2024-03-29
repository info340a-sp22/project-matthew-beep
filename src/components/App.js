
import React, { useState, useEffect } from 'react';
import { NavigationBar } from './NavigationBar.js';
import { RestuarantList } from './RestaurantList.js';
import { SearchBar } from './SearchForm.js';
import { Footer } from './Footer.js';
import RestaurantPage from './About.js';
import { RestaurantDetail } from './RestaurantDetail.js';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { AddPage } from './AddRestaurant.js';
import { FavoriteRestaurant } from './Favorite.js';
import Button from 'react-bootstrap/Button';

import { getDatabase, ref, onValue, push } from 'firebase/database';

export default App;

function App(props) {

  const [restaurantArray, setRestaurantArray] = useState([]);

  const addRestaurant = (name, address, type, description) => {
    const newRestaurant = {
      name : name,
      address : address,
      type : type,
      description : description,
      img : "default.jpg"
    }

    const database = getDatabase();
    const allRestaurantRef = ref(database, "allRestaurants");
    push(allRestaurantRef, newRestaurant)
    
  } 

  useEffect (() => {

    const database = getDatabase();


    const allRestaurantRef = ref(database, "allRestaurants");
    onValue(allRestaurantRef, (snapshot) => {
      const newVal = snapshot.val();
      const keys = Object.keys(newVal);
      const newObjArray = keys.map((key) => {
        return newVal[key]
      })

      console.log(newObjArray);
      setRestaurantArray(newObjArray);

    })


  }, [])
  console.log("new array");
  console.log(restaurantArray);
  return (
    <div className="container-fluid search text-light px-0 pt-5">
      <NavigationBar />
      <SearchBar data = {restaurantArray}/>
      <Routes>
        <Route path="featured" element={<RestuarantList data = {restaurantArray}/>}/>
        <Route path="add" element={<AddPage submit={addRestaurant}/>}/>
        <Route path="favorite" element={<FavoriteRestaurant data={restaurantArray}/>} />
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
