import React, {useState} from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import {Button} from 'react-bootstrap';

  const MovieList = ({movies, addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div >
            <Button onClick={handleShow}>ADD Movie</Button> <br/> <br/>
            <div className='movi'>
            {movies.map((el, i) => (
                <MovieCard movie={el} key={i}/>
            ))}
            <br/>
            <div>
                <AddMovie handleClose={handleClose}  show={show} addMovie={addMovie}/>
            </div>
            </div>
        </div>
    );
};

export default MovieList;