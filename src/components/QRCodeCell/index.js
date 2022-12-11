import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill }) => (
  <path d={d} fill={fill} />
);

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
