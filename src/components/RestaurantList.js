import React from 'react';
import Aladdins from './img/Aladdins.jpg';
import chimac from './img/chimac.jpg';
import cedars from './img/cedars.jpg';
import morsel from './img/morsel.jpg';


// gonna need data first
function restuarantCard(data) {
    let list = [...data];
    const featured = list.slice(0, 4).map((element) => {
        console.log(element.img);
        return (
            <div class="col ml-5 pl-5 my-5">
                <div className="card">
                    <img src={require(element.img)} className="card-img-top" alt="aladdins restaurant"/>
                    <div className="card-body">
                        <h3 className="card-title">{element.name}</h3>
                        <p className="card-text">{element.description}</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        );
    });

    return featured;
}

export function RestuarantList(props) {
    let data = [...props.data];

    let cards = restuarantCard(data)
    return(
        <section>
            <div class="row mt-5">

                
                {cards}
                
            </div>
            </section>
    )
}




// commented out harc code for right now
/* 
                <div class="col ml-5 pl-5 my-5">
                    <div class="card">
                        <img src={Aladdins} class="card-img-top" alt="aladdins restaurant"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 1</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col my-5">
                    <div class="card">
                        <img src={chimac} class="card-img-top" alt="chimac korean wings"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 2</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class ="col my-5">
                    <div class="card">
                        <img src={cedars} class="card-img-top" alt="cedars food"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 3</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col my-5">
                    <div class="card">
                        <img src={morsel}class="card-img-top" alt="morsel food"/>
                        <div class="card-body">
                            <h3 class="card-title">Restaurant 4</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
*/