import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState(
        [
            {
                name: "harry potter",
                price: "10",
            },
            {
                name: "harry potter",
                price: "10",
            },
            {
                name: "harry potter",
                price: "10",
            }
        ]
    );
    return (
        <MovieContext.Provider value={{movies: movies, setMovies: setMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
};