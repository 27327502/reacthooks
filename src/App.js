import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MovieList from "./MovieList";

function App() {
  const [filter, setFilter] = useState("");
  const [rate, setRate] = useState(0);
  const [list, setList] = useState([
    {
      title: "Taken 1",
      description: "lorem ipsum",
      posterURL:
        "https://img.filmsactu.net/datas/personnes/l/i/liam-neeson/xl/liam-neeson-60cb1b9e9a319.jpg",
      rating: 1,
    },
    {
      title: "Pirates",
      description: "lorem ipsum",
      posterURL:
        "https://download.vikidia.org/vikidia/fr/images/thumb/6/6a/Drapeau_pirate_de_Jack_Rackam.svg/1200px-Drapeau_pirate_de_Jack_Rackam.svg.png",
      rating: 3,
    },
    {
      title: "Spiderman",
      description: "lorem ipsum",
      posterURL:
        "https://img-31.ccm2.net/b7cT9EdHlBFD_m_yRloEOxdYwgk=/1240x/smart/a561efadf2fd4681bdd2506b4b527ca5/ccmcms-hugo/10607992.jpg",
      rating: 2,
    },
    {
      title: "alice ",
      description: "lorem ipsum",
      posterURL:
        "https://img-31.ccm2.net/b7cT9EdHlBFD_m_yRloEOxdYwgk=/1240x/smart/a561efadf2fd4681bdd2506b4b527ca5/ccmcms-hugo/10607992.jpg",
      rating: 0,
    },
  ]);

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
    <div className="App">
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
}
export default App;
