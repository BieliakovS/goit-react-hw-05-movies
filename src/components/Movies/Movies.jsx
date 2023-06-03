import React, { useEffect, useState, useCallback } from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [previousSearchResults, setPreviousSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const previousResults = JSON.parse(
      localStorage.getItem('previousSearchResults')
    );
    setPreviousSearchResults(previousResults || []);
  }, []);

  const handleSearch = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.results);
      localStorage.setItem(
        'previousSearchResults',
        JSON.stringify(data.results)
      );
    } catch (error) {
      console.log('error search movies:', error);
    }
  }, [searchQuery]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
      handleSearch();
    }
  }, [searchParams, handleSearch]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    handleSearch();
  };

  const handleGoBack = () => {
    setSearchResults(previousSearchResults);
    navigate(-1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Пошук</button>
      </form>
      {location.pathname !== '/movies' && (
        <button onClick={handleGoBack}>Назад</button>
      )}
      <ul>
        {searchResults.map(movie => (
          <div key={movie.id}>
            <li>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { searchResults },
                }}
                onClick={() => setSearchParams({ query: searchQuery })}
              >
                {movie.title}
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