// A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import QRCodeSvg from "./QRCodeSvg";

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
  // Use type === -1 to automatically pick the best type.
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;
  return (
    <QRCodeSvg
      {...props}
      bgColor={bgColor}
      d={cells
        .map((row, rowIndex) =>
          row.map((cell, cellIndex) => (cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" ")
        )
        .join(" ")}
      fgColor={fgColor}
      ref={ref}
      size={size}
      viewBoxSize={cells.length}
    />
  );
});

QRCode.displayName = "QRCode";
QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

export default QRCode;
