import React, { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const AddMovie = ({ handleAddMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURl: "",
    rate: 0,
  });
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    handleAddMovie(newMovie);
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add new Movie <small>(please fill the fields below)</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Title</InputGroup.Text>
            <FormControl name="title" onChange={handleChange} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>description</InputGroup.Text>
            <FormControl name="description" onChange={handleChange} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Picture</InputGroup.Text>
            <FormControl name="posterURl" onChange={handleChange} />
          </InputGroup>
          <StarRatingComponent
            name="star"
            onStarClick={(nextValue, prevValue, name) =>
              setNewMovie({ ...newMovie, rate: nextValue })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
