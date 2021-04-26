import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import {Text} from '../../UI';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Background = styled.ImageBackground.attrs(() => ({
  imageStyle: {borderRadius: 10},
}))`
  height: 450px;
  width: 100%;
  resize-mode: stretch;
  justify-content: center;
  position: relative;
`;

export const FavButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const FavoriteOption = styled(Ionicons).attrs(props => ({
  name: props.isFavorite ? 'star' : 'star-outline',
  color: 'yellow',
  size: 50,
  // : 'star-outline'
}))``;

export const Title = styled(Text).attrs(() => ({
  type: 'big',
  weight: 'heavy',
}))`
  color: #fff;
`;

export const ReturnButton = styled(Ionicons).attrs(props => ({
  name: 'close-outline',
  color: 'white',
  size: 40,
  // : 'star-outline'
}))`
  position: absolute;
  top: 1px;

  margin-left: 10px;
`;

export const DetailWrapper = styled.ScrollView`
  flex: 1;

  width: 100%;
  padding-top: 20px;
  padding-horizontal: 5px;
`;

export const DescriptionText = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'book',
  color: 'white',
}))`
  margin-top: 10px;
`;

export const StarringView = styled.View`
  margin-top: 10px;
  height: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActorWrapper = styled.View`
  height: 100%;
  flex-direction: column;
  width: 60px;
  align-items: center;
`;

export const ActorImage = styled.ImageBackground.attrs(() => ({
  imageStyle: {borderRadius: 25},
}))`
  height: 50px;
  width: 50px;
  resize-mode: stretch;
  justify-content: center;
  position: relative;
`;

export const StarringTitle = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'heavy',
  color: 'white',
}))`
  margin-top: 10px;
`;

export const ActorName = styled(Text).attrs(() => ({
  type: 'small',
  weight: 'book',
  color: 'white',
}))``;
