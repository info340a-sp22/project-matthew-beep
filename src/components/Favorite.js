import { Outlet } from 'react-router-dom';

export function FavoriteRestaurant() {

    return(
        <div>
            <h2>Featured Page</h2>
            <Outlet />
        </div>
    )

}