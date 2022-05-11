# react-qr-code

A <QRCode /> component for React. This library works with React and React Native
(using [React Native SVG](https://github.com/react-native-svg/react-native-svg)).

This is a fork of [https://github.com/rosskhanas/react-qr-code](https://github.com/rosskhanas/react-qr-code) by [Ross Khanas](https://rosskhanas.github.io/) that implements the viewbox attribute.

### Screenshots

#### [Web](https://rosskhanas.github.io/react-qr-code/)

<img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-web.png" width="640" />

#### Android & iOS

<div float="left">
    <img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-android.png" width="320" />
    <img src="https://github.com/rosskhanas/react-qr-code/blob/master/demo-ios.png" width="265" />
</div>

### Installation

```
yarn add @nico-martin/react-qr-code
```

When using this library with React Native, you will also need to [have `react-native-svg` installed](https://github.com/react-native-svg/react-native-svg#installation).

```
yarn add react-native-svg
cd ios && pod install
```

### The Gist

```javascript
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));
```

Note: If the QR code is likely to appear next to dark objects, you will need to wrap it in a light-colored container to preserve the '[quiet zone](https://qrworld.wordpress.com/2011/08/09/the-quiet-zone/)', e.g. 
```javascript
<div style={{ background: 'white', padding: '16px' }}>
    <QRCode ... />
</div>
```


### API

| prop      | type                         | default value |
| --------- | ---------------------------- | ------------- |
| `bgColor` | `string`                     | '#FFFFFF'     |
| `fgColor` | `string`                     | '#000000'     |
| `level`   | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           |
| `size`    | `number`                     | 256           |
| `title`   | `string`                     |               |
| `value`   | `string`                     |               |

### License

MIT
