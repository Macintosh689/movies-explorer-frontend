import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getAllLikeMovies } from "../../utils/MainApi";

export default function SavedMovies() {
  const saveSearch = useSelector((state) => state.movie.saveSearch);
  const saveShort = useSelector((state) => state.movie.saveShort);
  const [movies, setMovies] = useState(new Array(1));
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    setLoading(true);
    getAllLikeMovies(token)
    .then((data) => {
      console.log(data);
    setMovies(
     data.filter((movie) => {
        if (saveShort) {
          return (
            (movie.nameRU.toLowerCase().includes(saveSearch?.toLowerCase()) &&
              movie.duration <= 40) ||
            (movie.nameEN.toLowerCase().includes(saveSearch?.toLowerCase()) &&
              movie.duration <= 40)
          );
        } else {
          return (
            movie.nameRU.toLowerCase().includes(saveSearch?.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(saveSearch?.toLowerCase())
          );
        }
      })
    );})
    setLoading(false);
  }, [saveSearch, saveShort]);
  console.log(movies);
  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCardList  movies={movies} loading={loading}/>
      <Footer />
    </div>
  );
}
