import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Cast from './cast';
import {
  Wrapper,
  FavoriteOption,
  Title,
  Background,
  ReturnButton,
  DetailWrapper,
  DescriptionText,
  StarringView,
  ActorWrapper,
  ActorImage,
  ActorName,
  StarringTitle,
  FavButton,
} from './styles';

const MovieModal = ({
  isVisible,
  toggleModal,
  changeFavorites,
  current,
  favoritesIds,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Background
          source={{
            uri: current.Poster,
          }}>
          <ReturnButton onPress={toggleModal} />
          {current.imdbID !== 0 && (
            <FavButton
              onPress={() => (
                changeFavorites(current), setIsFavorite(!isFavorite)
              )}>
              <FavoriteOption
                isFavorite={favoritesIds.includes(current.imdbID)}
              />
            </FavButton>
          )}
        </Background>
        <DetailWrapper>
          <Title>{current.Title}</Title>
          {current.imdbID !== 0 && (
            <>
              <DescriptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget arcu congue, mollis felis sit amet, maximus justo. Fusce
                lobortis turpis a magna tempor, semper mollis ante viverra.
                Nulla a felis vehicula, efficitur nisi eu, lacinia diam.
                Maecenas sed condimentum purus, id pulvinar nibh. Aliquam erat
                volutpat.
              </DescriptionText>
              <StarringTitle>Elenco</StarringTitle>
              <StarringView>
                {Cast.map((item, index) => (
                  <ActorWrapper key={index}>
                    <ActorImage
                      source={{
                        uri: item.uri,
                      }}
                    />
                    <ActorName>{item.name}</ActorName>
                  </ActorWrapper>
                ))}
              </StarringView>
            </>
          )}
        </DetailWrapper>
      </Wrapper>
    </Modal>
  );
};

export default MovieModal;
