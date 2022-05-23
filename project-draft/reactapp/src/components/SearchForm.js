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
        <form onSubmit={handleSubmit} className='form-inline'>
            <div className="search-bar">
                <input className="form-control" placeholder="Search for Food..." value={textContent} onChange={handleChange}/>
                <button className='btn btn-secondary' type='submit'>
                Search!
                </button>
            </div>
        </form>
    )
}