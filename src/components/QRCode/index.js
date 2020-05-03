// qr.js doesn't handle error level of zero (M) so we need to do it right, thus the deep require.
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
import PropTypes from "prop-types";
import React from "react";
import QRCodeSurface from "../QRCodeSurface";
import QRCodeSurfaceCell from "../QRCodeSurfaceCell";
import * as LEVELS from "../../constants/levels";

const propTypes = {
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.oneOf([LEVELS.L, LEVELS.M, LEVELS.Q, LEVELS.H]),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

const defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: LEVELS.L,
  size: 256,
};

export default class QRCode extends React.PureComponent {
  renderQRCode() {
    const { bgColor, fgColor, level, size, value } = this.props;
    // We'll use type === -1 to force QRCode to automatically pick the best type
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();
    const cells = qrcode.modules;
    const tileSize = size / cells.length;
    return cells.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        const fill = cell ? fgColor : bgColor;
        const qrItemWidth =
          Math.ceil((cellIndex + 1) * tileSize) -
          Math.floor(cellIndex * tileSize);
        const qrItemHeight =
          Math.ceil((rowIndex + 1) * tileSize) -
          Math.floor(rowIndex * tileSize);
        const d = `M 0 0 L ${qrItemWidth} 0 L ${qrItemWidth} ${qrItemHeight} L 0 ${qrItemHeight} Z`;
        const transformX = Math.round(cellIndex * tileSize);
        const transformY = Math.round(rowIndex * tileSize);
        return (
          <QRCodeSurfaceCell
            /* eslint-disable react/no-array-index-key */
            key={`rectangle-${rowIndex}-${cellIndex}`}
            /* eslint-enable react/no-array-index-key */
            d={d}
            fill={fill}
            transformX={transformX}
            transformY={transformY}
          />
        );
      })
    );
  }

  render() {
    const { size } = this.props;
    return (
      <QRCodeSurface size={size} style={{ height: size, width: size }}>
        {this.renderQRCode()}
      </QRCodeSurface>
    );
  }
}

QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;
