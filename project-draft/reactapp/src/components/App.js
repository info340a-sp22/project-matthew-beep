
import React from 'react';
import { NavigationBar } from './NavigationBar.js';
import { RestuarantList } from './RestaurantList.js';

export default App;

function App(props) {
  return (
    <div className="container-fluid search text-light py-5">
      <NavigationBar />        
      <RestuarantList />
    </div>
  );
}
