import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      return alert(
        'Sorry, but we dont can find empty string, you shoud write something'
      );
    }
    setSearchParams({ query: searchQuery });
  };

  const fetchSearchMovie = useCallback(async query => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error searching movies:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchSearchMovie(query)
      .then(info => {
        if (!info.total_results) {
          return alert(`Sorry we dont found ${query}`);
        }
        setFilms(info.results);
      })
      .catch(error => console.log(error));
  }, [query, fetchSearchMovie]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(({ original_title, id }) => (
          <div>
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
