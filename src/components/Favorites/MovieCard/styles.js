import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import {Text} from '../../UI';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.View`
  flex-direction: row;
  height: 150px;
  margin-top: 15px;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.secondary};
`;

export const InfoWrapper = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Title = styled(Text).attrs(() => ({
  type: 'big',
}))`
  color: ${props => props.theme.colors.secondary};
  flex-shrink: 1;
`;
export const Avaliation = styled(Text).attrs(() => ({
  type: 'medium',
}))`
  color: ${props => props.theme.colors.secondary};
  flex-shrink: 1;
`;
export const MoviePoster = styled(FastImage)`
  height: 100%;
  width: 90px;
  margin-right: 5px;
`;

export const Remove = styled.TouchableOpacity``;

export const RemoveIcon = styled(Ionicons).attrs(props => ({
  name: 'remove-circle-outline',
  color: 'yellow',
  size: 30,
  // : 'star-outline'
}))``;
