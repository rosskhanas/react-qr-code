import React from 'react';

export default (Surface) => {
  const propTypes = {
    children: React.PropTypes.array.isRequired,
    size: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  };

  const defaultProps = {};

  const QRCodeSurface = ({ children, size, style }) => (
    <Surface height={size} style={style} width={size} >
      {children}
    </Surface>
  );

  QRCodeSurface.propTypes = propTypes;
  QRCodeSurface.defaultProps = defaultProps;

  return QRCodeSurface;
};
