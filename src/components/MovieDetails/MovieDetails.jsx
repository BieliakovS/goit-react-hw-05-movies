import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h2>
        {movie.title} ({movie.release_date.split('-')[0]})
      </h2>
      <p>User score: {Math.round(movie.vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>
        {movie.genres.map(genre => (
          <span key={genre.id}>{genre.name} </span>
        ))}
      </p>
      <p>Additional information:</p>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
