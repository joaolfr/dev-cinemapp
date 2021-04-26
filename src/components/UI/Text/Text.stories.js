/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CenterView } from '../View';
import Text from '.';
import Highlight from './highlight';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView style={{ backgroundColor: '#FFF' }}>{getStory()}</CenterView>)
  .add('Tipografy', () => (
    <>
      <Text type="big">
        Text BIG
      </Text>

      <Text type="max">
        Text MAX
      </Text>

      <Text>
        Text DEFAULT
      </Text>

      <Text type="small">
        Text SMALL
      </Text>

      <Text type="tiny">
        Text TINY
      </Text>
    </>
  ));
