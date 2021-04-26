import React from 'react';
import {
  Wrapper,
  Title,
  MoviePoster,
  InfoWrapper,
  Avaliation,
  Remove,
  RemoveIcon,
} from './styles';

const MovieCard = ({item, removeFavorite}) => {
  return (
    <Wrapper>
      <MoviePoster source={{uri: item.Poster}} />
      <InfoWrapper>
        <Title>{item.Title}</Title>
        <Avaliation>Nota: 9.5</Avaliation>
        <Remove onPress={() => removeFavorite(item.imdbID)}>
          <RemoveIcon />
        </Remove>
      </InfoWrapper>
    </Wrapper>
  );
};

export default MovieCard;
