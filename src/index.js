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

function makePath(cells) {
    /**  How each cell is drawn:
     *
     *    M  x y    // absolute move to x and y coordinate
     *    l  1 0    // relative line to x+1
     *       0 1    // relative line to y+1
     *      -1 0    // relative line to x-1
     *    Z         // close path
     */
    return cells.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
            const posX = cellIndex
            const posY = rowIndex
            return cell ? `M ${posX} ${posY} l 1 0 0 1 -1 0 Z` : "" // Return nothing if empty pixel
        }).join(" "),
    ).join(" ")
}

const QRCode = forwardRef(({ bgColor, fgColor, level, size, value, ...props }, ref) => {
  // We'll use type === -1 to force QRCode to automatically pick the best type.
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;
  return (
    <QRCodeSurface {...props} size={size} ref={ref} dataSize={cells.length} bgColor={bgColor}>
      <QRCodeCell
        d={makePath(cells)}
        fill={fgColor}
      />
    </QRCodeSurface>
  );
});
QRCode.displayName = "QRCode";
QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

export default memo(QRCode);
