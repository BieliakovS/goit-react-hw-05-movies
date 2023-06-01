import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <div>
      <ul className={css.headerList}>
        <li className={css.headerItem}>
          <NavLink className={css.headerLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.headerItem}>
          <NavLink className={css.headerLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
