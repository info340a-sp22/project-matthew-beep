import React, {useState} from "react";


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
            return (restaraunts.name.substr(0, textContent.length) === textContent);
        });
        rows = results(data);
    }
    console.log("filtered: ");
    console.log(data);
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
                            {rows}
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
        <div>
            <tr>
                <td>{restaurant.name}</td>
            </tr>
        </div>
        );
        return row;
    })
    return data;
}