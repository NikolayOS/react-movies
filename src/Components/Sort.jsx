import styles from "./Sort.module.css"
const Sort = (props) => {
    return (
        <div className={styles.radioButtons}>
    <p>
    <label>
    <input className="with-gap" name="categories" type="radio" data-type="all" onChange={props.handleFilter} 
        checked={props.categories === "all"}
    />
    <span>All</span>
    </label>
    </p>
    <p>
    <label>
    <input className="with-gap" name="categories" type="radio" data-type="series" onChange={props.handleFilter}
        checked={props.categories === "series"}
    />
    <span>Series</span>
    </label>
    </p>
    <p>
    <label>
    <input className="with-gap" name="categories" type="radio" data-type="movie" onChange={props.handleFilter}
            checked={props.categories === "movie"}
    />
    <span>Movie</span>
    </label>
    </p>
        </div>
    )
}

export default Sort;