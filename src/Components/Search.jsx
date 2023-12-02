const Search = (props) => {
    return(
        <div className="search">
            <input type="text"  placeholder="Search" value={props.search} onChange={props.searchHandler}/>
            <button className="waves-effect waves-light btn" onClick={() => props.goSearch(props.search,props.categories)}>Search</button>
        </div>
    )
}

export default Search;