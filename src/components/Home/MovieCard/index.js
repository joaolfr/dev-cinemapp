import React from 'react';
import {
  Container,
  Title,
  MoviePoster,
  DetailWrapper,
  SmallTitle,
} from './styles';

const MovieCard = ({setCurrentMovie, item}) => {
  return (
    <Container onPress={() => setCurrentMovie(item)}>
      <MoviePoster source={{uri: item.Poster}} />
      <DetailWrapper>
        <Title>{item.Title}</Title>
        <SmallTitle>{item.Year}</SmallTitle>
      </DetailWrapper>
    </Container>
  );
};

export default MovieCard;
