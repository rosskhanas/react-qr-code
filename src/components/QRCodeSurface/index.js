import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  xmlns: PropTypes.string,
};

const defaultProps = {
  style: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = ({ children, size, style, xmlns }) => (
  <svg id="qrcode" height={size} style={style} width={size} xmlns={xmlns}>
    {children}
  </svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
