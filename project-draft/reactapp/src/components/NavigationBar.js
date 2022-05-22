
export function NavigationBar(){
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="./about.html">About</a></li>
                </ul>
            </nav>
                <h1 className="text-center">HuskyEats</h1>
                <h2 className="text-center pb-5">Find a place to eat!</h2>
                <div className="search-bar">
                    <input className="form-control" placeholder="Search for Food..." />
                </div>
        </div>
    )
}