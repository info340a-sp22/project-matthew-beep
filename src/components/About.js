import { Outlet } from 'react-router-dom';


export default function AboutRestaurant(props) {

    return(
        <div>
            <p>Learn more about our Campus' Restaurants!</p>
            <Outlet />
        </div>
    )
}

