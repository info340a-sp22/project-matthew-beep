import { favArray } from './RestaurantDetail';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function FavoriteRestaurant(props) {
    let list = favArray;
    const fav = list.map((element) => {
        return <li>{element.name}</li>
    });
    
    return(
        <main>
            <div>
                <h2 className='subheaders'>Your Favorite Restaurants</h2>
                <ul>
                    {fav}
                </ul>
                <div className="form-group">
                    <Link to={"/featured"}>
                        <button type="button" id="add-task-button" className="btn btn-primary m-4">
                            Add Restaurants
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
        </main>
    )

}

