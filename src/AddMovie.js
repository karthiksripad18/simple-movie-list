import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { movies, setMovies } = useContext(MovieContext);

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, {name: name, price: price}])
    }
    return (
        <form onSubmit={addMovie}>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
            <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} />
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie;
