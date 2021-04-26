import styled from 'styled-components';
import {Text} from '../../UI';

export const Wrapper = styled.View``;

export const HeaderTitle = styled(Text).attrs(() => ({
  type: 'big',
}))`
  color: #fff;
  text-align: center;
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
