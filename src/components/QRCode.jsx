import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
// qr.js doesn't handle error level of zero (M) so we need to do it right,
// thus the deep require.
import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';
import * as LEVELS from '../constants/levels';

const propTypes = {
  Rectangle: React.PropTypes.func.isRequired,
  Surface: React.PropTypes.func.isRequired,
  Transform: React.PropTypes.func.isRequired,
  bgColor: React.PropTypes.string,
  fgColor: React.PropTypes.string,
  level: React.PropTypes.oneOf([LEVELS.L, LEVELS.M, LEVELS.Q, LEVELS.H]),
  size: React.PropTypes.number,
  value: React.PropTypes.string.isRequired,
};

const defaultProps = {
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  level: LEVELS.L,
  size: 256,
};

export default class QRCode extends React.Component {

  shouldComponentUpdate(nextProps) {
    return shallowCompare(this, nextProps);
  }

  renderQRCode() {
    const { Rectangle, Transform, bgColor, fgColor, level, size, value } = this.props;
    // We'll use type === -1 to force QRCode to automatically pick the best type
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();
    const cells = qrcode.modules;
    const tileW = size / cells.length;
    const tileH = size / cells.length;
    return cells.map((row, rowIndex) => (row.map((cell, cellIndex) => {
      const fill = cell ? fgColor : bgColor;
      const qrItemWidth = (Math.ceil((cellIndex + 1) * tileW) - Math.floor(cellIndex * tileW));
      const qrItemHeight = (Math.ceil((rowIndex + 1) * tileH) - Math.floor(rowIndex * tileH));
      const transformX = Math.round(cellIndex * tileW);
      const transformY = Math.round(rowIndex * tileH);
      const transform = new Transform().translate(transformX, transformY);
      return (
        <Rectangle
          key={`rectangle-${rowIndex}-${cellIndex}`}
          width={qrItemWidth}
          height={qrItemHeight}
          fill={fill}
          transform={transform}
        />
      );
    })));
  }

  render() {
    const canvasStyle = {
      height: this.props.size,
      width: this.props.size,
    };
    const { Surface } = this.props;
    return (
      <div>
        <Surface
          height={this.props.size}
          width={this.props.size}
          style={canvasStyle}
        >
          {this.renderQRCode()}
        </Surface>
      </div>
    );
  }
}

QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;
