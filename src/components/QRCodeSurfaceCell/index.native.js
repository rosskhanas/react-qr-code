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

const QRCodeSurfaceCell = ({ d, fill, transformX, transformY }) => (
  <Shape
    d={d}
    fill={fill}
    transform={new Transform().translate(transformX, transformY)}
  />
);

QRCodeSurfaceCell.propTypes = propTypes;
QRCodeSurfaceCell.defaultProps = defaultProps;

export default QRCodeSurfaceCell;
