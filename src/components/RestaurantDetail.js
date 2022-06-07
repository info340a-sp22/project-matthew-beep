import { useParams } from 'react-router-dom';
import _ from 'lodash';
import data from './data/restaraunts.json';


export let favArray = [];

export function RestaurantDetail(props) {
    
    const urlParams = useParams();
    
    // Use lodash here to filter by the restaurant name param to include details
    let restaurant =  _.find(data, {name: urlParams.restaurantName});
    console.log(restaurant);

    function handleClick(event) {
        favArray.push(restaurant);
    }

    return(
        <main>
            <div>
                <h2 className="subheaders">{restaurant.name}</h2>
                <p className='subheaders'>{restaurant.description}</p>
                <img src={require('../img/' + restaurant.img)} alt={restaurant.name + "restaurant"} className="AboutPic" />
                <div className="form-group">
                    <button type="button" id="add-fav-button" className="btn btn-primary m-4" onClick={handleClick}>
                        Add to favorites
                    </button>
                </div>
            </div>
        </main>
    )
}





