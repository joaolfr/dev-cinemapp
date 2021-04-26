import PropTypes from 'prop-types';

import styled from 'styled-components';

const Highlight = styled.Text`
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.primary)};
  ${({ weight }) => {
    let fontWeight;
    switch (weight) {
      case 'bold':
        fontWeight = 800;
        break;
      case 'light':
        fontWeight = 300;
        break;
      case 'semi':
        fontWeight = 600;
        break;
      default:
        fontWeight = 400;
    }
    return weight && `font-weight: ${fontWeight}`;
  }};
`;

Highlight.propTypes = {
  color: PropTypes.string,
};

Highlight.defaultProps = {
  color: null,
};

export default Highlight;
