// A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
import PropTypes from "prop-types";
import React, { memo, forwardRef } from "react";
import QRCodeCell from "./components/QRCodeCell";
import QRCodeSurface from "./components/QRCodeSurface";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

const defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256,
};

const QRCode = forwardRef(({ bgColor, fgColor, level, size, value, ...props }, ref) => {
  // We'll use type === -1 to force QRCode to automatically pick the best type.
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;
  const tileSize = size / cells.length;
  return (
    <QRCodeSurface {...props} size={size} ref={ref}>
      {cells.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const transformX = Math.round(cellIndex * tileSize);
          const transformY = Math.round(rowIndex * tileSize);
          const qrItemWidth = Math.round((cellIndex + 1) * tileSize) - transformX;
          const qrItemHeight = Math.round((rowIndex + 1) * tileSize) - transformY;
          return (
            <QRCodeCell
              /* eslint-disable react/no-array-index-key */
              key={`rectangle-${rowIndex}-${cellIndex}`}
              /* eslint-enable react/no-array-index-key */
              d={`M 0 0 L ${qrItemWidth} 0 L ${qrItemWidth} ${qrItemHeight} L 0 ${qrItemHeight} Z`}
              fill={cell ? fgColor : bgColor}
              transformX={transformX}
              transformY={transformY}
            />
          );
        })
      )}
    </QRCodeSurface>
  );
});

QRCode.displayName = "QRCode";
QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

export default memo(QRCode);
