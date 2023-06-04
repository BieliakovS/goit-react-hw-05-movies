import React, { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  Outlet,
  useSearchParams,
  useLocation,
  Link,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [, setSearchQuery] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchQuery(query);
  }, [searchParams]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link className={css.goBackBtn} to={goBack} replace>
        Go back
      </Link>
      <div className={css.movieWrapper}>
        <img
          className={css.movieImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={css.movieDetailsWrapper}>
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
        </div>
      </div>
      <p className={css.addInfoTitle}>Additional information:</p>
      <ul className={css.addInfoList}>
        <li className={css.addInfoItem}>
        <Link to={{ pathname: `/movies/${movieId}/cast`, state: { from: goBack } }}>Cast</Link>
        </li>
        <li className={css.addInfoItem}>
        <Link to={{ pathname: `/movies/${movieId}/reviews`, state: { from: goBack } }}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;


