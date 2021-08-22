import PropTypes from "prop-types";
import React from "react";
import { Svg } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeSurface = ({ children, size, ...props }) => (
  <Svg {...props} height={size} style={{ height: size, width: size }} width={size}>
    {children}
  </Svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
