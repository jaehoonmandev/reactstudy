import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);

    // 비동기
  async function fetchMovieHandler(){
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

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
