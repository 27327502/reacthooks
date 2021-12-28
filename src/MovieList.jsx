import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ list }) => {
  return (
    <Container>
      <Row>
        {list.length ? (
          list.map((movie, index) => (
            <Col>
              <MovieCard key={index} movie={movie} />
            </Col>
          ))
        ) : (
          <>No Movies please Add one </>
        )}
      </Row>
    </Container>
  );
};

export default MovieList;
