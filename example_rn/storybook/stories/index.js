import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import QRCode from '../../lib';

storiesOf('Components', module)
  .add('QRCode', () => (
    <QRCode value="hey" />
  ));
