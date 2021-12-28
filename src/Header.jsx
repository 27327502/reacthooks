import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import AddMovie from "./AddMovie";

const Header = ({ handleFilter, handleAddMovie, handleRating }) => {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "25px" }}>
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            type="text"
            placeholder="Search For a movie"
            style={{ width: "50%" }}
            onChange={(e) => handleFilter(e.target.value)}
          />
          &nbsp; &nbsp; &nbsp;
          <StarRatingComponent
            onStarClick={(nextValue, prevValue, name) =>
              handleRating(nextValue)
            }
          />
        </Navbar.Collapse>
        <AddMovie handleAddMovie={handleAddMovie} />
      </Container>
    </Navbar>
  );
};

export default Header;
