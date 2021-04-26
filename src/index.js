import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';
import {theme} from './services';
import Router from './routers';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Router />
    </ThemeProvider>
  );
};

export default Root;
