import PropTypes from 'prop-types';
import styled from 'styled-components';
import {metrics} from '~/utils';

const TextStyled = styled.Text`
  font-family: ${(props) =>
    props.layout === 'auth' ? 'Montserrat' : 'Futura'};
  font-size: ${(props) => {
    switch (props.type) {
      case 'h1':
        return metrics.px40;
      case 'h2':
        return metrics.px32;
      case 'h3':
        return metrics.px28;
      case 'h4':
        return metrics.px24;
      case 'h5':
        return metrics.px20;
      case 'h6':
        return metrics.px16;
      default:
        return metrics.px16;
    }
  }}px;
  color: ${(props) => props.color || '#1F253C'};
  font-weight: ${(props) => {
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
      case 'semi':
        return 600;
      default:
        return 'bold';
    }
  }};
  ${(props) => props.uppercase && 'text-transform: uppercase'}
`;

TextStyled.propTypes = {
  type: PropTypes.string,
  weight: PropTypes.string || PropTypes.number,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
};

TextStyled.defaultProps = {
  type: '',
  children: '',
  weight: 'normal',
  uppercase: false,
};

export default TextStyled;
