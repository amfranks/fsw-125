import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import MovieFormHandler from './components/MovieFormHandler';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => { // GET
    axios.get('/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  const addMovie = (newMovie) => { // POST
    axios.post('/movies', newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  };

  const editMovie = (updates, movieId) => { // PUT
    axios.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  const deleteMovie = (movieId) => { // DELETE
    axios.delete(`/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err))
  }

  const movieList = movies.map(movie => <Movie {...movie} editMovie={editMovie} deleteMovie={deleteMovie} key={movie._id} />)

  return (

    <div className="movie-container">
        <h1>MOVIE LIST</h1>

      <MovieFormHandler submit={addMovie} btnText='Add movie' />

        {movieList}
    </div>
  );
}

export default App;