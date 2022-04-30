import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  useViewBox: PropTypes.bool,
  title: PropTypes.string,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
  useViewBox: false,
};

const QRCodeSurface = ({ children, size, useViewBox, title, xmlns, ...props }) => (
  <svg
    {...props}
    {...(useViewBox ? { viewBox: `0 0 ${size}px ${size}px` } : { width: size, height: size })}
    xmlns={xmlns}
  >
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
