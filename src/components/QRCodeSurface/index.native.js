import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Svg, Rect } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

const defaultProps = {};

const QRCodeSurface = forwardRef(({ children, size, length, bgColor, ...props }, ref) => (
  <Svg {...props} height={size} ref={ref} style={{ height: size, width: size }} width={size}>
    <Rect x={0} y={0} width={length} height={length} fill={bgColor}/>
    {children}
  </Svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
