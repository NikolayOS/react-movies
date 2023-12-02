import Movie from './Movie';
import styles from './Movies.module.css'
function Movies(props) {
    const {movies = []} = props;
    return <div className={styles.movies} >
        {movies.length ? movies.map(movie => {
        return <Movie key = {movie.imdbID} {...movie}/>
        }) : <h4>Not found</h4>}
    </div>;
}

export default Movies ;
