import React from 'react';

export default (Shape, Transform) => {
  const propTypes = {
    d: React.PropTypes.string.isRequired,
    fill: React.PropTypes.string.isRequired,
    transformX: React.PropTypes.number.isRequired,
    transformY: React.PropTypes.number.isRequired,
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
      <Shape
        fill={fill}
        transform={transform}
        d={d}
      />
    );
  };

  QRCodeSurfaceCell.propTypes = propTypes;
  QRCodeSurfaceCell.defaultProps = defaultProps;

  return QRCodeSurfaceCell;
};
