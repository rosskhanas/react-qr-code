import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  dataSize: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = forwardRef(({ bgColor, dataSize, size, title, xmlns, children, ...props }, ref) => (
  <svg
    {...props}
    ref={ref}
    height={size}
    width={size}
    viewBox={`0 0 ${dataSize} ${dataSize}`}
    xmlns={xmlns}
  >
    {title ? <title>{title}</title> : null}
    <rect x={0} y={0} width={dataSize} height={dataSize} fill={bgColor}/>
    {children}
  </svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
