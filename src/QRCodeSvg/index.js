import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const propTypes = {
  bgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  bgD: PropTypes.string.isRequired,
  fgColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  fgD: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string,
  viewBoxSize: PropTypes.number.isRequired,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSvg = forwardRef(({ bgColor, bgD, fgD, fgColor, size, title, viewBoxSize, ...props }, ref) => (
  <svg {...props} height={size} ref={ref} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    {title ? <title>{title}</title> : null}
    <path d={bgD} fill={bgColor} />
    <path d={fgD} fill={fgColor} />
  </svg>
));

QRCodeSvg.displayName = "QRCodeSvg";
QRCodeSvg.propTypes = propTypes;
QRCodeSvg.defaultProps = defaultProps;

export default QRCodeSvg;
