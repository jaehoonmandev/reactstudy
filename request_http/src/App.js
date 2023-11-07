import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
  function fetchMovieHandler(){
      /*HTTP는 비동기 작업이기에 프로미스라는 객체를 반환한다
      * 잠재적으로 발생할 수 있는 오류나 호출에 대한 응답에 반응할 수 있게 해준다.*/
    fetch('https://swapi.dev/api/films/')
        .then(response => {// 요청이 처리되는 나중 시점에 처리할 수 있다.
                return response.json(); // 자동으로 객체화 시켜준다.
        })
        .then(data => {
            //변환
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
        });

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
