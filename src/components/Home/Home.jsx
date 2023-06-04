import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          if (movie.title && movie.id) {
            return (
              <div key={movie.id}>
                <li>
                  <Link
                    to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
                  >
                    {movie.title}
                  </Link>
                </li>
              </div>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default Home;