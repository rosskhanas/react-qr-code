# react-qr-code

[![npm package](https://badge.fury.io/js/react-qr-code.svg)](https://www.npmjs.org/package/react-qr-code)
[![Dependency Status](https://david-dm.org/opensource-cards/react-qr-code.svg)](https://david-dm.org/opensource-cards/react-qr-code)
[![devDependency Status](https://david-dm.org/opensource-cards/react-qr-code/dev-status.svg)](https://david-dm.org/opensource-cards/react-qr-code#info=devDependencies)

A <QRCode /> component for React. This library suppose to work with React and React Native (wasn't tested).

### Installation

Using [npm](https://www.npmjs.com/):

```
npm install --save react-qr-code
```

### The Gist

```javascript
import React from 'react';
import ReactART from 'react-art';
import Rectangle from 'react-art/lib/Rectangle.art';
import ReactDOM from 'react-dom';
import { QRCode } from 'react-qr-code';

ReactDOM.render(
	<QRCode
		Rectangle={Rectangle}
		Surface={ReactART.Surface}
		Transform={ReactART.Transform}
		value="hey"
	/>,
	document.getElementById('Container')
);
```

### API

prop        | type                         | default value
------------|------------------------------|--------------
`Rectangle` | `func`                       |
`Surface`   | `func`                       |
`Transform` | `func`                       |
`value`     | `string`                     |
`size`      | `number`                     | `128`
`bgColor`   | `string` (CSS color)         | `"#FFFFFF"`
`fgColor`   | `string` (CSS color)         | `"#000000"`
`level`     | `string` (`'L' 'M' 'Q' 'H'`) | `'L'`

### Examples

* Main ([source](https://github.com/opensource-cards/react-qr-code/tree/master/examples/main))

### License

MIT
