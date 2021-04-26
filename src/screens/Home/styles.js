import styled from 'styled-components';
import {Text} from '../../components/UI';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  background: ${props => props.theme.colors.secondary};
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const ButtonTxt = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'heavy',
}))`
  color: white;
`;

export const MoviesView = styled.ScrollView.attrs(() => ({
  horizontal: true,
}))`
  flex: 1;
  width: 100%;
`;

export const LoadingWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LoadingText = styled(Text).attrs(() => ({
  type: 'medium',
  weight: 'heavy',
}))`
  color: white;
  margin-left: 10px;
`;
