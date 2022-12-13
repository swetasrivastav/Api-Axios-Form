import React, { useState } from "react";
import "./Movie";
import Movie from "./Movie";
function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("submit");
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        console.log(
          transformedMovies.map((movienew, index) => movienew.releaseDate)
        );
        setMovies(transformedMovies);
      });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>fetch Movie</button>
      </section>
      <section>
        <Movie movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
