import { Shape, Transform } from "@react-native-community/art";
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
  <Shape
    d={d}
    fill={fill}
    transform={new Transform().translate(transformX, transformY)}
  />
);

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

export default QRCodeCell;
