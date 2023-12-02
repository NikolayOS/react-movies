import React from "react";
import axios from "axios";
import Movies from "../Components/Movies";
import Search from "../Components/Search";
import Sort from "../Components/Sort";
import Preloader from "../Components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            movies: [],
            search: "",
            categories: "all",
            loading: true,
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.goSearch = this.goSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    componentDidMount(){
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=simpsons`)
            .then(response => this.setState({movies: response.data.Search, loading: false}))
        }
    searchHandler(event){
            this.setState({search: event.target.value})
        }
    goSearch(str, type = "all"){
            axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => this.setState({movies: response.data.Search, loading: false }))
        }
    handleFilter(event){
        this.setState(() => ({categories: event.target.dataset.type}),
                    () => {this.goSearch(this.state.search, this.state.categories)})
    }
    render(){
        return <div className="container content">
                <Search search={this.state.search} goSearch={this.goSearch} 
                searchHandler={this.searchHandler} categories={this.state.categories}
                />
                <Sort handleFilter={this.handleFilter} categories={this.state.categories}/>
                {this.state.loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
                
            </div>
        
    }
}

export default Main;