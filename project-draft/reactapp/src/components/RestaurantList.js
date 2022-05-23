import React from 'react';
import Aladdins from './img/Aladdins.jpg';
import chimac from './img/chimac.jpg';
import cedars from './img/cedars.jpg';
import morsel from './img/morsel.jpg';


// gonna need data first
function restuarantCard(props) {

}

export function RestuarantList(props) {
    return(
        <section>
            <div class="row mt-5">
                <div class="col mx-5 my-5">
                    <div class="card">
                        <img src={Aladdins} class="card-img-top" alt="aladdins restaurant"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 1</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col mx-5 my-5">
                    <div class="card">
                        <img src={chimac} class="card-img-top" alt="chimac korean wings"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 2</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class ="col mx-5 my-5">
                    <div class="card">
                        <img src={cedars} class="card-img-top" alt="cedars food"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 3</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col mx-5 my-5">
                    <div class="card">
                        <img src={morsel}class="card-img-top" alt="morsel food"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 4</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                

                
            </div>
            </section>
    )
}