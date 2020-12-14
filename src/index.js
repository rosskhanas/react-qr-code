// A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
import PropTypes from "prop-types";
import React, { memo } from "react";
import QRCodeCell from "./components/QRCodeCell";
import QRCodeSurface from "./components/QRCodeSurface";

const propTypes = {
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.oneOf(["L", "M", "Q", "H"]),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
  withDownload: Proptypes.bool
};

const defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256,
  withDownload: false
};

const QRCode = ({ bgColor, fgColor, level, size, value, withDownload }) => {
  // We'll use type === -1 to force QRCode to automatically pick the best type.
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;
  const tileSize = size / cells.length;
  
  const downloadQR = () => {
    const svg = document.getElementById("qrcode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };
  
  return (
    <>
    <QRCodeSurface size={size} style={{ height: size, width: size }}>
      {cells.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const fill = cell ? fgColor : bgColor;
          const qrItemWidth =
            Math.ceil((cellIndex + 1) * tileSize) -
            Math.floor(cellIndex * tileSize);
          const qrItemHeight =
            Math.ceil((rowIndex + 1) * tileSize) -
            Math.floor(rowIndex * tileSize);
          const d = `M 0 0 L ${qrItemWidth} 0 L ${qrItemWidth} ${qrItemHeight} L 0 ${qrItemHeight} Z`;
          const transformX = Math.round(cellIndex * tileSize);
          const transformY = Math.round(rowIndex * tileSize);
          return (
            <QRCodeCell
              /* eslint-disable react/no-array-index-key */
              key={`rectangle-${rowIndex}-${cellIndex}`}
              /* eslint-enable react/no-array-index-key */
              d={d}
              fill={fill}
              transformX={transformX}
              transformY={transformY}
            />
          );
        })
      )}
    </QRCodeSurface>
    {withDownload && (
      <button onClick={() => downloadQR()} className="qr-code-download-btn">
        Download QR
      </button>
    )}
    </>
  );
};

QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

export default memo(QRCode);
