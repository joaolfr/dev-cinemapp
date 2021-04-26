import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useMoviesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setMovies} = useMoviesStore();
  const loadMovieDetail = useCallback(async search => {
    setLoading(true);
    try {
      const {data} = await API.get(
        `/?apikey=925eba28&s=${search ? search : 'avengers'}`,
      );
      if (data.Response === 'False') {
        setMovies([
          {
            Title: 'Esse filme não existe XD',
            Poster: 'https://ik.imagekit.io/0gpwujpz1/404_ZIzMLGHGz.jpg',
            imdbID: 0,
          },
        ]);
      } else {
        setMovies(data.Search);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadMovieDetail};
};
