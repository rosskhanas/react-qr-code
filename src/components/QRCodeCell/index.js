import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  transformX: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeCell = ({ d, fill, transformX, transformY }) => (
  <path
    d={d}
    fill={fill}
    transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`}
  />
);

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
