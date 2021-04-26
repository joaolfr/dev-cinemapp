import styled from 'styled-components';
import {Text} from '../../components/UI';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
  align-items: center;
`;

export const HeaderTitle = styled(Text).attrs(() => ({
  type: 'big',
}))`
  color: #fff;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: white;
  align-items: center;
  padding-right: 10px;
  width: 100%;
`;
export const MovieInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: 'white',
}))`
  width: 100%;

  font-size: 16px;
  color: white;
  font-family: Futura;
  padding-left: 10px;
  font-weight: 500;
`;

export const ClearSearchButton = styled.TouchableOpacity`
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
`;
export const ClearText = styled(Text)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  align-items: center;

  font-weight: 600;
  top: -1px;
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
