import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";
import { getAllLikeMovies } from "../../utils/MainApi";
import {
  laptopCount,
  laptopMax,
  laptopWidth,
  mobileCount,
  mobileMax,
  tabletCount,
  tabletMax,
  tabletWidth,
} from "../../utils/Constants";

export default function Movies() {
  const moviesRedux = useSelector((state) => state.movie.allMovies);
  const search = useSelector((state) => state.movie.search);

  const short = useSelector((state) => state.movie.short);
  const [movies, setMovies] = useState(new Array(1));
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState(false);
  const width = useWindowWidth();
  const [max, setMax] = useState(laptopMax);
  const [countFilms, setCountFilms] = useState(laptopCount);
  const [saveMovies, setSaveMovies] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoading(true);
    getAllLikeMovies(token).then((data) => {
      setSaveMovies(data);
    });
    setLoading(false);
  }, []);
  useEffect(() => {
    if (search.trim() !== "") {
      setLoading(true);
      setMovies(
        moviesRedux.filter((movie) => {
          if (short) {
            return (
              (movie.nameRU.toLowerCase().includes(search.toLowerCase()) &&
                movie.duration <= 40) ||
              (movie.nameEN.toLowerCase().includes(search.toLowerCase()) &&
                movie.duration <= 40)
            );
          } else {
            return (
              movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(search.toLowerCase())
            );
          }
        })
      );
      setTimeout(() => setLoading(false), 300);
    }
  }, [search, short]);

  useEffect(() => {
    if (countFilms >= movies.length) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [movies, countFilms, max]);

  useEffect(() => {
    if (width > laptopWidth) {
      setMax(laptopMax);
      setCountFilms(laptopCount);
    } else if (width > tabletWidth) {
      setMax(tabletMax);
      setCountFilms(tabletCount);
    } else {
      setMax(mobileMax);
      setCountFilms(mobileCount);
    }
  }, [width]);

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={movies.slice(0, countFilms)}
        loading={loading}
        block={block}
        setCountFilms={setCountFilms}
        max={max}
        saveMovies={saveMovies}
      />
      <Footer />
    </>
  );
}
