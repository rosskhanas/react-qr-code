import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Svg, Rect } from "react-native-svg";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  dataSize: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

const defaultProps = {};

const QRCodeSurface = forwardRef(({ bgColor, dataSize, size, children, ...props }, ref) => (
  <Svg
    {...props}
    ref={ref}
    height={size}
    width={size}
    style={{ height: size, width: size }}
    viewBox={`0 0 ${dataSize} ${dataSize}`}
  >
    <Rect x={0} y={0} width={dataSize} height={dataSize} fill={bgColor}/>
    {children}
  </Svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
