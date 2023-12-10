import React,{useState,useEffect} from "react";
import axios from "axios";
import Movies from "../Components/Movies";
import Search from "../Components/Search";
import Sort from "../Components/Sort";
import Preloader from "../Components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;
function Main () {

    const [movies,setMovies] = useState([]);
    const [search,setSearch] = useState("");
    const [categories,setCategories] = useState("all");
    const [loading,setLoading] = useState(true);
    const searchHandler = (event) => {
        setSearch(event.target.value)
        }
        const goSearch = (str, type = "all") => {
            axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => setMovies(response.data.Search),setLoading(false))
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
        }
        const handleFilter = (event) => {
            setCategories(event.target.dataset.type);
            goSearch(search, event.target.dataset.type)
    }
    useEffect(() =>  { axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=simpsons`)
            .then(response => setMovies(response.data.Search),setLoading(false))
            .catch((err) => {
                console.error(err)
                setLoading(false)
            }
            )
        },[])
        return (<div className="container content">
                <Search search={search} goSearch={goSearch} 
                searchHandler={searchHandler} categories={categories}
                />
                <Sort handleFilter={handleFilter} categories={categories}/>
                {loading ? <Preloader/> : <Movies movies={movies}/>}
                
            </div>
        )
    }

export default Main;