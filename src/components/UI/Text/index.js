import styled from 'styled-components';

const TextStyled = styled.Text`
  font-family: Futura;
  font-size: ${props => {
    switch (props.type) {
      case 'big':
        return 20;
      case 'max':
        return 16;
      case 'medium':
        return 14;
      case 'small':
        return 12;
      case 'tiny':
        return 10;
      default:
        return 14;
    }
  }}px;
  color: ${props => props.color || '#1F253C'};
  font-weight: ${props => {
    switch (props.weight) {
      case 'bold':
        return 'bold';
      case 'heavy':
        return 700;
      case 'medium':
        return 600;
      case 'book':
        return 500;
      case 'light':
        return 400;
      case 'tiny':
        return 100;
      case 'semi':
        return 600;
      default:
        return 400;
    }
  }};
  ${props => props.uppercase && 'text-transform: uppercase'};
  ${props => props.letterSpace && 'letter-spacing: 1px;'};
`;

export default TextStyled;
