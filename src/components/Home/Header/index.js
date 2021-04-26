import React from 'react';
import {
  Wrapper,
  ClearText,
  HeaderTitle,
  MovieInput,
  InputWrapper,
  ClearSearchButton,
} from './styles';

const Header = ({searchString, setSearchString, searchMovie}) => {
  return (
    <Wrapper>
      <HeaderTitle>Tá afim de assistir o quê hoje?</HeaderTitle>
      <InputWrapper>
        <MovieInput
          placeholder="Digite aqui"
          value={searchString}
          onChangeText={value => setSearchString(value)}
          returnKeyType="search"
          onSubmitEditing={() => searchMovie()}
        />
        {searchString !== '' && (
          <ClearSearchButton onPress={() => setSearchString('')}>
            <ClearText>x</ClearText>
          </ClearSearchButton>
        )}
      </InputWrapper>
    </Wrapper>
  );
};
export default Header;
