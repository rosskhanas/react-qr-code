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
