import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const Space = ({
  size,
}) => (
  <View
    style={{
      height: size,
      padding: size,
    }}
  />
);

Space.propTypes = {
  size: PropTypes.number,
};

Space.defaultProps = {
  size: 15,
};

export default Space;
