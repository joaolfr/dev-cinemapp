import createStore from 'zustand';

const initialState = {
  movies: [{Title: 'movie 1'}, {Title: 'movie 2'}],
  favorites: [],
  searchMovies: [],
  favoritesIds: [],
};

const [useMoviesStore] = createStore((set, get) => ({
  ...initialState,

  setMovies: moviesList => set(state => ({...state, movies: moviesList})),
  setSearchMovies: searchList =>
    set(state => ({...state, searchMovies: searchList})),
  setFavorites: list => set(state => ({...state, favorites: list})),
  setFavoritesIds: list => set(state => ({...state, favoritesIds: list})),
}));

export default useMoviesStore;
