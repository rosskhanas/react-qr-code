import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  d: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  viewBoxSize: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeSvg = forwardRef(({ bgColor, d, fgColor, size, viewBoxSize, ...props }, ref) => (
  <Svg
    {...props}
    height={size}
    ref={ref}
    style={{ height: size, width: size }}
    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    width={size}
  >
    <Rect fill={bgColor} height={viewBoxSize} width={viewBoxSize} x={0} y={0} />
    <Path d={d} fill={fgColor} />
  </Svg>
));

QRCodeSvg.displayName = "QRCodeSvg";
QRCodeSvg.propTypes = propTypes;
QRCodeSvg.defaultProps = defaultProps;

export default QRCodeSvg;
