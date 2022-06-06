import React, { useState } from 'react';

export function AddPage({submit}) {
    const [nameValue, setNameValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    const handleChangeName = (event) => {
        const name = event.target.value;
        setNameValue(name);
    }

    const handleChangeAddress = (event) => {
        const address = event.target.value;
        setAddressValue(address);
    }

    const handleChangeType = (event) => {
        const type = event.target.value;
        setTypeValue(type);
    }

    const handleChangeDesc = (event) => {
        const desc = event.target.value;
        setDescriptionValue(desc);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(nameValue, addressValue, typeValue, descriptionValue);

        setNameValue("");
        setAddressValue("");
        setTypeValue("");
        setDescriptionValue("");
    }

    return (
        <div className="jumbotron">
            <h2>Want to add a restaurant? Enter the details below!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Name">What is the Name of your Restaurant?</label>
                    <input className="form-control" placeholder="Name" id="Name" value={nameValue} onChange={handleChangeName} />
                </div>
                <div className="form-group">
                    <label>What is the Address of your Restaurant?</label>
                    <input className="form-control" placeholder="Address" value={addressValue} onChange={handleChangeAddress}/>
                </div>
                <div className="form-group">
                    <label>What type of Restaurant is it</label>
                    <input className="form-control" placeholder="Type" value={typeValue} onChange={handleChangeType}/>
                </div>
                <div className="form-group">
                    <label>What is a description of the Restaurant?</label>
                    <input className="form-control" placeholder="Description" value={descriptionValue} onChange={handleChangeDesc} />
                </div>
                <button className='btn btn-secondary' type='submit'>Submit!</button>
            </form>
        </div>
    )




    //const database = getDatabase();
    //const allRestaurants = ref(database, "allRestaurants");

    //push(allRestaurants, newRestaurant )
}