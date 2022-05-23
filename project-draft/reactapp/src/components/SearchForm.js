import React, {useState} from "react";

export function SearchBar(props){
    const [textContent, setTextContent] = useState("");

    const handleChange = (event) => {
        const typedContent = event.target.value;
        setTextContent(typedContent);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextContent('');
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
                </div>
            </form>
            </div>
        </div>
    )
}