import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useNavigation} from '@react-navigation/native';
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
      // console.log('movie: ', data.Search);
      setMovies(data.Search);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadMovieDetail};
};
