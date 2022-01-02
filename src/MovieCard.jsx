import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }} key={movie.id}>
      <Link to={`/trailer/${movie.id}`}>
        <Card.Img variant="top" src={movie.posterURL} />
      </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description.substring(0, 100) + "..."}</Card.Text>
        <StarRatingComponent value={movie.rating} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
