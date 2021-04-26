import {useCallback, useState} from 'react';
import {useMoviesStore} from '../../stores';
import {getMovies} from '../../api/movies';
import axios from 'axios';

export default () => {
  //state variables
  const [isModalVisible, setModalVisible] = useState(false);
  const [current, setCurrent] = useState({});
  const [searchString, setSearchString] = useState('');

  //imported variables
  const {loadMovieDetail, loading} = getMovies();
  const {
    movies,
    setFavorites,
    favorites,
    favoritesIds,
    setFavoritesIds,
  } = useMoviesStore();

  //functions
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const setCurrentMovie = movie => {
    setCurrent(movie);
    toggleModal();
  };

  //function used to manipulate the favorites list (add and remove)
  const changeFavorites = movieObj => {
    let arr = favorites;
    let list = favoritesIds;

    if (favoritesIds.includes(movieObj.imdbID)) {
      let index = list.indexOf(movieObj.imdbID);
      list.splice(index, 1);
      arr.splice(index, 1);
    } else {
      arr.push(movieObj);
      list.push(movieObj.imdbID);
    }

    setFavoritesIds(list);
    setFavorites(arr);
  };

  const searchMovie = () => {
    if (searchString === '') {
      loadMovieDetail('batman');
    } else {
      loadMovieDetail(searchString);
    }
  };

  return {
    movies,
    loadMovieDetail,
    loading,
    isModalVisible,
    setModalVisible,
    toggleModal,
    setCurrentMovie,
    current,
    changeFavorites,
    searchString,
    setSearchString,
    searchMovie,
    favorites,
    favoritesIds,
  };
};
