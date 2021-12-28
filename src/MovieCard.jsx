import React from "react";
import { Button, Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <StarRatingComponent value={movie.rating} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
