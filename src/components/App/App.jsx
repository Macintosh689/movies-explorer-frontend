import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import { getAllMovies } from "../../utils/MoviesApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies, setError } from "../../redux/slices/movieReducer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.allMovies);
  useEffect(() => {
    if (!movies.length) {
      getAllMovies().then((movies) => {
        dispatch(setAllMovies(movies));
        dispatch(setError(false));
      }).catch((error) => {
        dispatch(setError(true));
      })
    }
  }, []);
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path="/saved-movies" element={<ProtectedRoute><SavedMovies /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
