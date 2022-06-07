import { Outlet } from 'react-router-dom';


export default function AboutRestaurant(props) {

    return(
        <main>
            <div>
                <p className='subheaders'>Learn more about our Campus' Restaurants!</p>
                <Outlet />
            </div>
        </main>
    )
}

