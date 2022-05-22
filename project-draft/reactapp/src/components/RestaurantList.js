import React from 'react';
import Aladdins from '../../img/Aladdins.jpg'

// gonna need data first
function restuarantCard(props) {

}

export function restuarantList() {
    return(
        <div class="row mt-5">
            
            <div class="col mx-5 my-5">
                <div class="card">
                    <img src={Aladdins} className="card-img-top" alt="aladdins restaurant">
                    <div class="card-body">
                        <h5 class="card-title">Restaurant 1</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            
            <div class="col mx-5 my-5">
                <div class="card">
                    <img src="img/chimac.jpg" class="card-img-top" alt="chimac korean wings">
                    <div class="card-body">
                        <h5 class="card-title">Restaurant 2</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            
            <div class ="col mx-5 my-5">
                <div class="card">
                    <img src="img/cedars.jpg" class="card-img-top" alt="cedars food">
                    <div class="card-body">
                        <h5 class="card-title">Restaurant 3</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        
            <div class="col mx-5 my-5">
                <div class="card">
                    <img src="img/morsel.jpg" class="card-img-top" alt="morsel food">
                    <div class="card-body">
                        <h5 class="card-title">Restaurant 4</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            

        
        </div>
    );
}