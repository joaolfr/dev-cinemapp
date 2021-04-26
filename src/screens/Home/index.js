import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import useHome from './hooks';
import {MovieModal} from '../../components/UI';
import {MovieCard, Header} from '../../components/Home';
import {Container, MoviesView, LoadingWrapper, LoadingText} from './styles';

const Home = () => {
  const {
    movies,
    loading,
    changeFavorites,
    isModalVisible,
    searchString,
    setSearchString,
    toggleModal,
    setCurrentMovie,
    current,
    searchMovie,
    favoritesIds,
  } = useHome();
  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <Container>
      <Header
        searchString={searchString}
        setSearchString={setSearchString}
        searchMovie={searchMovie}
      />

      <MoviesView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        {loading && (
          <LoadingWrapper>
            <ActivityIndicator color="#fff" />
            <LoadingText>Carregando filmes...</LoadingText>
          </LoadingWrapper>
        )}
        {!loading &&
          movies &&
          movies.map((item, index) => (
            <MovieCard
              key={index}
              item={item}
              setCurrentMovie={setCurrentMovie}
            />
          ))}

        <View style={{height: 100}} />
      </MoviesView>
      {/* modal */}
      <MovieModal
        favoritesIds={favoritesIds}
        current={current}
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        changeFavorites={changeFavorites}
      />
      {/*  */}
    </Container>
  );
};

export default Home;
