import React from 'react';
import useFavorites from './hooks';
import {Wrapper, Container, Title} from './styles';
import {MovieCard} from '../../components/Favorites';
import {Space} from '../../components/UI';

const Favorites = () => {
  const {favorites, removeFavorite} = useFavorites();
  return (
    <Wrapper>
      <Container>
        {favorites.length === 0 ? (
          <Title>Você ainda não possui favoritos</Title>
        ) : (
          favorites.map((item, index) => (
            <MovieCard
              removeFavorite={removeFavorite}
              item={item}
              key={index}
            />
          ))
        )}
        <Space size={10} />
      </Container>
    </Wrapper>
  );
};
export default Favorites;
