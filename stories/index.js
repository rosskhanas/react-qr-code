import React from 'react';
import { storiesOf } from '@kadira/storybook';
import QRCode from 'react-qr-code';

storiesOf('Components', module)
  .add('QRCode', () => (
    <QRCode value="hey" />
  ));
