import { useParams } from 'react-router-dom';

export function RestaurantDetail() {

    const urlParams = useParams();

    // Use lodash here to filter by the restaurant name param to include details
    console.log(urlParams);
    console.log(urlParams.restaurantName);

    return(
        <h2> Description of restaurant </h2>
    )
}



