import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getAllLikeMovies } from "../../utils/MainApi";

export default function SavedMovies() {
  const [movies, setMovies] = useState(new Array(1));
  const [loading, setLoading] = useState(false);

  const [saveSearch, setSaveSearch] = useState("");
  const [saveShort, setSaveShort] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    setLoading(true);
    getAllLikeMovies(token).then((data) => {
      setSavedMovies(data);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    setMovies(
      savedMovies.filter((movie) => {
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
    );

    setLoading(false);
  }, [savedMovies, saveSearch, saveShort]);

  return (
    <div>
      <Header />
      <SearchForm
        saveSearch={saveSearch}
        setSaveSearch={setSaveSearch}
        saveShort={saveShort}
        setSaveShort={setSaveShort}
      />
      <MoviesCardList movies={movies} loading={loading} saveMovies={movies} />
      <Footer />
    </div>
  );
}
