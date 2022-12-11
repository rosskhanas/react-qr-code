import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  d: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string,
  viewBoxSize: PropTypes.number.isRequired,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSvg = forwardRef(({ bgColor, d, fgColor, size, title, viewBoxSize, ...props }, ref) => (
  <svg {...props} height={size} ref={ref} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size}>
    {title ? <title>{title}</title> : null}
    <rect fill={bgColor} height={viewBoxSize} width={viewBoxSize} x={0} y={0} />
    <path d={d} fill={fgColor} />
  </svg>
));

QRCodeSvg.displayName = "QRCodeSvg";
QRCodeSvg.propTypes = propTypes;
QRCodeSvg.defaultProps = defaultProps;

export default QRCodeSvg;
