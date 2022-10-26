import PropTypes from "prop-types";
import React from "react";
import { Path } from "react-native-svg";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill }) => <Path d={d} fill={fill} />;

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
