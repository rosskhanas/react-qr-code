import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = forwardRef(({ children, size, length, title, xmlns, bgColor, ...props }, ref) => (
  <svg {...props} height={size} ref={ref} width={size} xmlns={xmlns} viewBox={`0 0 ${length} ${length}`}>
    {title ? <title>{title}</title> : null}
    <rect x={0} y={0} width={length} height={length} fill={bgColor}/>
    {children}
  </svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
