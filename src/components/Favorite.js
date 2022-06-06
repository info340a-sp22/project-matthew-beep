import { favArray } from './RestaurantDetail';
import { Outlet } from 'react-router-dom';

export function FavoriteRestaurant(props) {
    let list = favArray;
    const fav = list.map((element) => {
        return <li>{element.name}</li>
    });
    return(
        <div>
            <h2>Featured Page</h2>
            <ul>
                {fav}
            </ul>
            <div className="form-group">
                <button type="button" id="add-task-button" className="btn btn-primary">Add Restaurants</button>
            </div>
            <Outlet />
        </div>
    )

}

function addFavorite() {

}