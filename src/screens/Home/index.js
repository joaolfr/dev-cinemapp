import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';
import useHome from './hooks';
import {Text, MovieModal} from '../../components/UI';
import {MovieCard} from '../../components/Home';
import {
  Container,
  HeaderTitle,
  SearchButton,
  MovieInput,
  ButtonTxt,
  MoviesView,
  InputWrapper,
  ClearSearchButton,
  ClearText,
  LoadingWrapper,
  LoadingText,
} from './styles';

const Home = () => {
  const {
    movies,
    loadMovieDetail,
    loading,
    changeFavorites,
    isModalVisible,
    searchString,
    setSearchString,
    toggleModal,
    setCurrentMovie,
    current,
    searchMovie,
    favorites,
    favoritesIds,
  } = useHome();
  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <Container>
      <HeaderTitle>Tá afim de assistir o quê hoje?</HeaderTitle>
      <InputWrapper>
        <MovieInput
          placeholder="Digite aqui"
          value={searchString}
          onChangeText={value => setSearchString(value)}
          returnKeyType="search"
          onSubmitEditing={() => searchMovie()}
        />
        {searchString !== '' && (
          <ClearSearchButton onPress={() => setSearchString('')}>
            <ClearText>x</ClearText>
          </ClearSearchButton>
        )}
      </InputWrapper>

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
