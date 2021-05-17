import React, { useContext} from 'react';
import Movie from './Movie';
import {MovieContext } from './MovieContext';

const MovieList = () => {
    const {movies} = useContext(MovieContext);
    return (
        <div>
            {
                movies.map(
                    (movie, index) => <Movie name={movie.name} price={movie.price} key={index} />
                )
            }
        </div>
    )
}

export default MovieList;
