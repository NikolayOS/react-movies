    import React from 'react';

    function Movie(props) {
        const {
        Poster: poster,
        Title: title,
        Type: type,
        Year: year,
        imdbID: id
        } = props;
        return (<div className="movie card">
            <div className="row">
        <div className="col s12 m12">
        <div className="card">
            <div className="card-image">
            <img src={poster}/>
            </div>
            <span className="card-title">{title}</span>
            <div className="card-content">
            <p>{type} <span className='right'>{year}</span></p>
            </div>
        </div>
        </div>
    </div>
        </div>
        )
    }
    export default  Movie ;
