import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: undefined,
};

const QRCodeSurface = ({ children, size, style }) => (
  <svg height={size} style={style} width={size}>
    {children}
  </svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
