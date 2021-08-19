import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating';

const MovieCard = ({movie}) => {
   
    return (
        <div>
           <Card style={{ width: '18rem', marginTop: '15px'}}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <RatingView ratingValue={movie.rate} /* RatingView Props */ />
  <Card.Text> {movie.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.date}</ListGroupItem>
    <ListGroupItem>{movie.duration}</ListGroupItem>
    <ListGroupItem>{movie.genre}</ListGroupItem>
  </ListGroup>
</Card>
        </div>
    )
}

export default MovieCard