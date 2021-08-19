import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const AddMovie = ({handleClose, show, addMovie}) => {

  const [newMovie, setNewMovie] = useState({
      img:"",
      title:"",
      duration:"",
      genre:"",
      date:"",
      rate:1,
      description:"",
  })
const handleChange =(e) =>{
    setNewMovie({...newMovie, [e.target.name]: e.target.value})
}
const onStarClick = (nextValue, prevValue, name) => {
  setNewMovie({...newMovie, rate: nextValue});
}

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="put a Title movie" name="title"
    onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Img URL</Form.Label>
    <Form.Control type="link" placeholder="Put URL Img" name="img"
    onChange={handleChange} />
  </Form.Group>
 
 
  <Form.Group className="mb-3" >
    <Form.Label>Duration</Form.Label>
    <Form.Control type="text" placeholder="put a movie duration" name="duration"
    onChange={handleChange} />
  </Form.Group>

  <Form.Label>select a movie genre</Form.Label>
  <Form.Control as="select" multiple name="genre" onChange={handleChange}>
  <option>select a movie genre</option>
  <option>Action</option>
  <option>Comedy</option>
  <option>Sci-fi</option>
  <option>Aventure</option>
  <option>Film for famille</option>
  <option>Wor</option>
  <option>Romance</option>
  <option>Drama</option>
  <option>Adventure</option>
  <option>Animation</option>
  </Form.Control>

  <Form.Group className="mb-3">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" placeholder="Put URL Img" name="date"
     onChange={handleChange} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Movie Description</Form.Label>
    <Form.Control as="textarea" rows={2} name="description" 
    onChange={handleChange} />
  </Form.Group>
  <Rating onClick={onStarClick} ratingValue={newMovie.rate} /* Rating Props */ />
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              addMovie(newMovie);
              handleClose();
              }} >
            ADD Movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie;
