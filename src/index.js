import PropTypes from "prop-types";
import qrcode from "qrcode-generator";
import React, { forwardRef } from "react";
import QRCodeSvg from "./QRCodeSvg";

qrcode.stringToBytes = (s) => Array.from(new TextEncoder().encode(s));

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export const QRCode = forwardRef(({ bgColor = "#FFFFFF", fgColor = "#000000", level = "L", size = 256, value, ...props }, ref) => {
  const qr = qrcode(0, level);
  qr.addData(value);
  qr.make();
  const moduleCount = qr.getModuleCount();
  const cells = Array.from({ length: moduleCount }, (_, rowIndex) =>
    Array.from({ length: moduleCount }, (_, colIndex) => qr.isDark(rowIndex, colIndex)),
  );
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
      viewBoxSize={moduleCount}
    />
  );
});

QRCode.displayName = "QRCode";
QRCode.propTypes = propTypes;

export default QRCode;
