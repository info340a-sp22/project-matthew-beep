import React, {useState} from "react";
import { Link } from 'react-router-dom';


export function SearchBar(props){
    
    let data = [...props.data];

    const [textContent, setTextContent] = useState("");
    
    let rows = <td></td>;

    const handleChange = (event) => {
        const typedContent = event.target.value;
        setTextContent(typedContent);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextContent('');
    }

    if (textContent.length > 0) {
        data = data.filter((restaraunts) => {
            console.log("checking " + restaraunts.name)
            const textUpper = textContent.toUpperCase();
            const restarauntsUpper = (restaraunts.name.substr(0, textContent.length)).toUpperCase();
            return (textUpper === restarauntsUpper);
        });
        rows = results(data);
    }

    if (rows.length === 0) {
        rows = <td>Nothing to Show!</td>;
    }

 
    return (
        <div className="jumbotron">
            <div className='container'>
            <form onSubmit={handleSubmit} className='form'>
                <div className="search-bar">
                    <label htmlFor='.form-control'>Search</label>
                    <input className="form-control" placeholder="Search for Food..." value={textContent} onChange={handleChange}/>
                    <button className='btn btn-secondary' type='submit'>
                    Search!
                    </button>
                    <div id ="results">
                        <table>
                            <tbody>
                                <tr>
                                    {rows}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

function results(data) {
    data = data.map((restaurant) => {
        let row = (
            <td key={restaurant.name} >
                <Link to={"about/"+restaurant.name}>{restaurant.name}</Link>
            </td>
        );
        return row;
    })
    return data;
}