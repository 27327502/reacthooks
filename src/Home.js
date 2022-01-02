import React, { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const Home = ({ list, setList }) => {
  const [filter, setFilter] = useState("");
  const [rate, setRate] = useState(0);

  const handleFilter = (value) => {
    setFilter(value);
  };
  const handleAddMovie = (movie) => {
    setList([...list, movie]);
  };

  const handleRating = (rating) => {
    setRate(rating);
  };
  return (
    <div>
      <Header
        handleFilter={handleFilter}
        handleAddMovie={handleAddMovie}
        handleRating={handleRating}
      />
      <MovieList
        list={list.filter(
          (element) =>
            element.title.toUpperCase().includes(filter.toUpperCase().trim()) &&
            element.rating >= rate
        )}
      ></MovieList>
    </div>
  );
};

export default Home;
