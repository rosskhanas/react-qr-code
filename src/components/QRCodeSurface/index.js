import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  xmlns: PropTypes.string,
};

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = ({ children, size, xmlns, ...props }) => (
  <svg {...props} height={size} width={size} xmlns={xmlns}>
    {children}
  </svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
