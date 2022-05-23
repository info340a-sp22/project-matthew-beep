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
        <div className="row mt-5">
            
            <div className="col mx-5 my-5">
                <div className="card">
                    <img src={Aladdins} className="card-img-top" alt="aladdins restaurant" />
                    <div className="card-body">
                        <h5 className="card-title">Restaurant 1</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            
            <div className="col mx-5 my-5">
                <div className="card">
                    <img src={chimac} className="card-img-top" alt="chimac korean wings" />
                    <div className="card-body">
                        <h5 className="card-title">Restaurant 2</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            
            <div className ="col mx-5 my-5">
                <div className="card">
                    <img src={cedars} className="card-img-top" alt="cedars food" />
                    <div className="card-body">
                        <h5 className="card-title">Restaurant 3</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        
            <div className="col mx-5 my-5">
                <div className="card">
                    <img src={morsel} className="card-img-top" alt="morsel food" />
                    <div className="card-body">
                        <h5 className="card-title">Restaurant 4</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            

        
        </div>
    )
}