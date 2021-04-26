/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CenterView } from '../View';
import Heading from './Heading';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView style={{ backgroundColor: '#FFF' }}>{getStory()}</CenterView>)
  .add('Heading', () => (
    <>
      <Heading type="h1">
        H1 Normal
      </Heading>
      <Heading type="h2">
        H2 Normal
      </Heading>
      <Heading type="h3">
        H3 Normal
      </Heading>
      <Heading type="h4">
        H4 Normal
      </Heading>
      <Heading type="h5">
        H5 Normal
      </Heading>
      <Heading type="h6">
        H6 Normal
      </Heading>
    </>
  ));
