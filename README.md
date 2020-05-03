# react-qr-code

[![npm package](https://badge.fury.io/js/react-qr-code.svg)](https://www.npmjs.org/package/react-qr-code)
[![Dependency Status](https://david-dm.org/rosskhanas/react-qr-code.svg)](https://david-dm.org/rosskhanas/react-qr-code)
[![devDependency Status](https://david-dm.org/rosskhanas/react-qr-code/dev-status.svg)](https://david-dm.org/rosskhanas/react-qr-code#info=devDependencies)
[![peerDependency Status](https://david-dm.org/rosskhanas/react-qr-code/peer-status.svg)](https://david-dm.org/rosskhanas/react-qr-code#info=peerDependencies)

A <QRCode /> component for React. This library works with React and React Native
(uses ART module).

### Screenshots

#### [Web](https://rosskhanas.github.io/react-qr-code/)

<img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-web.png" width="640" />

#### Android & iOS

<img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-android.png" width="320" />

#### iOS

<img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-ios.png" width="320" />

### Installation

```
yarn add react-qr-code
```

### The Gist

```javascript
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));
```

### API

| prop      | type                         | default value |
| --------- | ---------------------------- | ------------- |
| `value`   | `string`                     |
| `size`    | `number`                     | 128           |
| `bgColor` | `string`                     | '#FFFFFF'     |
| `fgColor` | `string`                     | '#000000'     |
| `level`   | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           |

### License

MIT
