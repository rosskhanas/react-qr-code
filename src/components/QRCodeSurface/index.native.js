import PropTypes from "prop-types";
import React from "react";
import { Svg } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  useViewBox: PropTypes.bool,
};

const defaultProps = {
  useViewBox: false,
};

const QRCodeSurface = ({ children, size, useViewBox, ...props }) => (
  <Svg
    {...props}
    {...(useViewBox
      ? { viewBox: `0 0 ${size}px ${size}px` }
      : { width: size, height: size, style: { height: size, width: size } })}
  >
    {children}
  </Svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
