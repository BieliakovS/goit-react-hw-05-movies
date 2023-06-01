import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6dcd31a9bcf35c6ea88f864789b7c2f';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.log('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId, setCast]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul className="cast-list">
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default Cast;
