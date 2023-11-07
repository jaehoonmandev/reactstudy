import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    // 비동기
  async function fetchMovieHandler(){
      setIsLoading(true);
    const response = fetch('https://swapi.dev/api/films/')
    const data = await (await response).json();

    const transformMovies = data.results.map(
        movie => {
            return {
                id : movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.release_date
            }
        }
    );
    setMovies(transformMovies);
      setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
          {!isLoading && movies.length === 0 && <p> Found no movies... </p>}

          {isLoading && <p> Loading... </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
