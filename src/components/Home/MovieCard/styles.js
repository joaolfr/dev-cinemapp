import styled from 'styled-components';
import {Text} from '../../UI';

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  margin-top: 15px;
  width: 330px;
  margin-right: 15px;
  height: 90%;
  background: ${props => props.theme.colors.secondary};
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const DetailWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 10%;
  width: 100%;
  padding-horizontal: 5px;
`;
export const Title = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'heavy',
}))`
  flex-shrink: 1;
  color: ${props => props.theme.colors.primary};
`;
export const SmallTitle = styled(Text).attrs(() => ({
  type: 'tiny',
  weight: 'medium',
}))`
  flex-shrink: 1;
  color: ${props => props.theme.colors.primary};
`;
export const MoviePoster = styled.Image`
  height: 90%;
  width: 100%;
`;
