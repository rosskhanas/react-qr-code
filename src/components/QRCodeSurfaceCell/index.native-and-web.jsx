import PropTypes from 'prop-types';
import React from 'react';

export default (Shape, Transform) => {
  const propTypes = {
    d: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    transformX: PropTypes.number.isRequired,
    transformY: PropTypes.number.isRequired,
  };

  const defaultProps = {};

  const QRCodeSurfaceCell = ({
    d,
    fill,
    transformX,
    transformY,
  }) => {
    const transform = new Transform().translate(transformX, transformY);
    return (
      <Shape d={d} fill={fill} transform={transform} />
    );
  };

  QRCodeSurfaceCell.propTypes = propTypes;
  QRCodeSurfaceCell.defaultProps = defaultProps;

  return QRCodeSurfaceCell;
};
