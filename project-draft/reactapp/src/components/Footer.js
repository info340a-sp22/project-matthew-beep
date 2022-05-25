import React from 'react';

export function Footer(props){
    return(
        <footer>
            <div class="container p-5">
                <h4 className='pb-5'>Contact us!</h4>
                <p><a href="mailto:email@HuskyEats.uw.edu"><span class="material-icons">Email: </span>HuskyEats@.uw.edu</a></p>
                <p><a href="tel:253-253-2532"><span class="material-icons">Phone: </span> 253-253-2532</a></p>
                <p className='m-0 text-light'>&copy; HuskyEats 2021</p>
            </div>
    </footer>
    )

}
