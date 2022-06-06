import { useParams } from 'react-router-dom';
import _ from 'lodash';
import data from './data/restaraunts.json';
import { getDatabase, ref, set } from 'firebase/database';


export let favArray = [];

export function RestaurantDetail(props) {
    
    const urlParams = useParams();
    
    // Use lodash here to filter by the restaurant name param to include details
    const database = getDatabase();
    let restaurant =  _.find(data, {name: urlParams.restaurantName});
    console.log(restaurant);

    function handleClick(event) {
        console.log("clicked");
        favArray.push(restaurant);
    }

    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <div className="form-group">
                <button type="button" id="add-fav-button" className="btn btn-primary" onClick={handleClick}>
                    Add to favorites
                </button>
            </div>
        </div>
    )
}





