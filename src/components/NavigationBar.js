import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavigationBar(props){
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to ="/featured">Home</NavLink></li>
                    <li><NavLink to ="/favorite">Favorites</NavLink></li>
                    <li><NavLink to="/add">Add Restaurants</NavLink></li>
                </ul>
            </nav>
                <div className="miniJumbo">
                <h1 className="text-center">HuskyEats</h1>
                <h2 className="text-center pb-5">Find a place to eat!</h2>
                </div>
        </div>
    )
}