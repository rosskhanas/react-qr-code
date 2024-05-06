import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Path, Svg } from "react-native-svg";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  bgD: PropTypes.string.isRequired,
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  fgD: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  viewBoxSize: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeSvg = forwardRef(({ bgColor, bgD, fgD, fgColor, size, viewBoxSize, ...props }, ref) => (
  <Svg
    {...props}
    height={size}
    ref={ref}
    style={{ height: size, width: size }}
    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    width={size}
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  
  >
    <Path d={bgD} fill={bgColor} />
    <Path d={fgD} fill={fgColor} />
  </Svg>
));

QRCodeSvg.displayName = "QRCodeSvg";
QRCodeSvg.propTypes = propTypes;
QRCodeSvg.defaultProps = defaultProps;

export default QRCodeSvg;
