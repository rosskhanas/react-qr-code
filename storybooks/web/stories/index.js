import React from 'react';
import { storiesOf } from '@kadira/storybook';
import QRCode from 'react-qr-code';

storiesOf('components', module)
  .add('hey', () => (
    <QRCode value="hey" />
  ));
