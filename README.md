# react-qr-code

[![npm package](https://badge.fury.io/js/react-qr-code.svg)](https://www.npmjs.org/package/react-qr-code)
[![Dependency Status](https://david-dm.org/rosskhanas/react-qr-code.svg)](https://david-dm.org/rosskhanas/react-qr-code)
[![devDependency Status](https://david-dm.org/rosskhanas/react-qr-code/dev-status.svg)](https://david-dm.org/rosskhanas/react-qr-code#info=devDependencies)
[![peerDependency Status](https://david-dm.org/rosskhanas/react-qr-code/peer-status.svg)](https://david-dm.org/rosskhanas/react-qr-code#info=peerDependencies)

A <QRCode /> component for React. This library works with React and React Native
(using [React Native SVG](https://github.com/react-native-svg/react-native-svg)).

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
npm i react-qr-code
```

When using this library with React Native, you will also need to [have `react-native-svg` installed](https://github.com/react-native-svg/react-native-svg#installation).

```
npm i react-native-svg
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

Responsive QR code example:

```javascript
// Can be anything instead of `maxWidth` that limits the width.
<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
  <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={value}
    viewBox={`0 0 256 256`}
  />
</div>
```

### API

| prop      | type                         | default value | platform          |
| --------- | ---------------------------- | ------------- |-------------------|
| `bgColor` | `string`                     | '#FFFFFF'     | web, ios, android |
| `fgColor` | `string`                     | '#000000'     | web, ios, android |
| `level`   | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           | web, ios, android |
| `size`    | `number`                     | 256           | web, ios, android |
| `title`   | `string`                     |               | web               |
| `value`   | `string`                     |               | web, ios, android |

Adheres to the [official QR spec](https://www.qrcode.com/en/about/version.html) and can store up to 2953 characters in `value`.

### Styling Updates

The project now uses a global stylesheet and modular styled-components for better organization and maintainability.

#### Global Styles

Global styles are defined in `src/styles/GlobalStyle.js` using `styled-components`. These styles are applied across the entire application.

Example:
```javascript
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <YourComponent />
    </>
  );
}
```

#### Modular Styled Components

Component-specific styles are moved to `src/styles/StyledComponents.js`.

Example:
```javascript
import { ListContainer, Table, TableHeader, TableRow, TableCell } from "./styles/StyledComponents";

function Demo() {
  return (
    <ListContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Value</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Example</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </ListContainer>
  );
}
```

Refer to the `src/styles/GlobalStyle.js` and `src/styles/StyledComponents.js` files for more details.

### License

MIT
