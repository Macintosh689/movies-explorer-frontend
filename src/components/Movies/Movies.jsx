import React, { useEffect, useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

export default function Movies() {
  const moviesRedux = useSelector((state) => state.movie.allMovies);
  const search = useSelector((state) => state.movie.search);
  
  const short = useSelector((state) => state.movie.short);
  const [movies, setMovies] = useState(new Array(1));
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState(false);
  const width = useWindowWidth();
  const [max, setMax] = useState(3);
  const [countFilms, setCountFilms] = useState(3);
  console.log(moviesRedux);

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
    if (width > 1280) {
      setMax(3);
      setCountFilms(12);
    } else if (width > 681) {
      setMax(2);
      setCountFilms(8);
    } else {
      setMax(1);
      setCountFilms(5);
    }
  }, [width]);

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList movies={movies.slice(0, countFilms)} loading={loading} block={block} setCountFilms={setCountFilms} max={max}/>   
      <Footer />
    </>
  )
}
