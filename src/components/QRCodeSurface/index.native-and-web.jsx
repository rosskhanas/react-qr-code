import PropTypes from 'prop-types';
import React from 'react';

export default (Surface) => {
  const propTypes = {
    children: PropTypes.array.isRequired,
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  const defaultProps = {
    style: undefined,
  };

  const QRCodeSurface = ({ children, size, style }) => (
    <Surface height={size} style={style} width={size} >
      {children}
    </Surface>
  );

  QRCodeSurface.propTypes = propTypes;
  QRCodeSurface.defaultProps = defaultProps;

  return QRCodeSurface;
};
