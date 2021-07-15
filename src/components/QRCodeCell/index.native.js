import PropTypes from "prop-types";
import React from "react";
import { Path } from "react-native-svg";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  transformX: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill, transformX, transformY }) => (
  <Path d={d} fill={fill} x={transformX} y={transformY} />
);

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
