import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  transformX: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
};

const defaultProps = {};

const QRCodeSurfaceCell = ({ d, fill, transformX, transformY }) => (
  <path
    d={d}
    fill={fill}
    transform={`matrix(${[1, 0, 0, 1, transformX, transformY]})`}
  />
);

QRCodeSurfaceCell.propTypes = propTypes;
QRCodeSurfaceCell.defaultProps = defaultProps;

export default QRCodeSurfaceCell;
