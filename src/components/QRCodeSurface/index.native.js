import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Svg } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeSurface = forwardRef(({ children, size, ...props }, ref) => (
  <Svg {...props} height={size} ref={ref} style={{ height: size, width: size }} width={size}>
    {children}
  </Svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
