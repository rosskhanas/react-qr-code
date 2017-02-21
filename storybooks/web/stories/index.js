import { storiesOf } from '@kadira/storybook';
import React from 'react';
import QRCode from 'react-qr-code';

storiesOf('components', module)
  .add('hello-world', () => (
    <QRCode value="hello-world" />
  ))
  .add('my repository url', () => (
    <QRCode value="https://github.com/rtkhanas/react-qr-code" />
  ))
  .add('my storybook url', () => (
    <QRCode value="https://rtkhanas.github.io/react-qr-code/" />
  ));
