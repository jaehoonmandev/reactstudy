import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



    // 비동기
  /*async function fetchMovieHandler(){*/
    // useEffect가 무한루프에 빠지지 않기 위해  useCallback로 항상 동일한 함수 사용하기.
  const fetchMovieHandler = useCallback(async ()=> {

          setIsLoading(true);
          setError(null);
          //try-catch 로 에러 핸들링.
          try{
              const response = fetch('https://swapi.dev/api/films/')
              //정상 처리가 되지 않았다면 catch로 보내기
              if(!(await response).ok){
                  throw new Error('Something went wrong!');
              }
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
          }catch(error){
              setError(error.message)
          }
          setIsLoading(false);

  }, []);

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler]); // 즉각적으로 요청을 보낸다.



  let content = <p>Found no movies.</p>;

    if(movies.length > 0){
        content = <MoviesList movies={movies}/>;
    }
    if(movies.length === 0){
        content = <p> Found no movies... </p>;
    }
    if(error){
        content = <p>{error}</p>;
    }
    if(isLoading){
        content = <p> Loading... </p>;
    }

    return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
          {content}
      </section>
    </React.Fragment>
  );
}

export default App;
