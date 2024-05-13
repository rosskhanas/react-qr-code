import PropTypes from "prop-types";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
// A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.
import QRCodeImpl from "qr.js/lib/QRCode";
import React, { forwardRef } from "react";
import QRCodeSvg from "./QRCodeSvg";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export const QRCode = forwardRef(({ bgColor = "#FFFFFF", fgColor = "#000000", level = "L", size = 256, value, ...props }, ref) => {
  // Use type === -1 to automatically pick the best type.
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;
  return (
    <QRCodeSvg
      {...props}
      bgColor={bgColor}
      bgD={cells
        .map((row, rowIndex) => row.map((cell, cellIndex) => (!cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" "))
        .join(" ")}
      fgColor={fgColor}
      fgD={cells
        .map((row, rowIndex) => row.map((cell, cellIndex) => (cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" "))
        .join(" ")}
      ref={ref}
      size={size}
      viewBoxSize={cells.length}
    />
  );
});

QRCode.displayName = "QRCode";
QRCode.propTypes = propTypes;

export default QRCode;
