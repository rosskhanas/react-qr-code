import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import QRCode from '../../lib';

storiesOf('components', module)
  .add('hey', () => (
    <QRCode value="hey" />
  ));
