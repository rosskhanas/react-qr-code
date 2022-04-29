import PropTypes from "prop-types";
import React from "react";
import { Svg } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  viewBox: PropTypes.string.isRequired,
};

const defaultProps = {};

const QRCodeSurface = ({ children, viewBox, ...props }) => (
  <Svg {...props} viewBox={viewBox}>
    {children}
  </Svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
