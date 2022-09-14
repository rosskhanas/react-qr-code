import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = forwardRef(({ children, size, title, xmlns, ...props }, ref) => (
  <svg {...props} height={size} width={size} xmlns={xmlns} ref={ref}>
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
));

QRCodeSurface.displayName = "QRCodeSurface";
QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
