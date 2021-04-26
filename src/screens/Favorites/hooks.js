import {useState} from 'react';
import {useMoviesStore} from '../../stores';
import {getMovies} from '../../api/movies';

export default () => {
  //states
  const [isModalVisible, setModalVisible] = useState(false);
  const [current, setCurrent] = useState({});

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

  const addFavorite = id => {
    setFavorites(id);
  };

  const removeFavorite = movieId => {
    let arr = favorites;
    let list = favoritesIds;

    let index = list.indexOf(movieId);

    arr.splice(index, 1);
    list.splice(index, 1);

    setFavorites(arr);
    setFavoritesIds(list);
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
    addFavorite,
    favorites,
    removeFavorite,
  };
};
