import { Svg } from "react-native-svg";
import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: undefined,
};

const QRCodeSurface = ({ children, size, style, ...props }) => (
  <Svg {...props} height={size} style={style} width={size}>
    {children}
  </Svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
