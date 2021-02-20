import { Surface } from "@react-native-community/art";
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
  <Surface {...props} height={size} style={style} width={size}>
    {children}
  </Surface>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;
