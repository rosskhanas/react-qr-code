import js from "highlight.js/lib/languages/javascript";
import React, { Component } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import QRCode from "./lib";

SyntaxHighlighter.registerLanguage("javascript", js);

const Demo = ({ value, setValue }) => {
  const repositoryLink = "https://github.com/rosskhanas/react-qr-code";
  const codeString = `
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

ReactDOM.render(
<QRCode value="${value}" />,
document.getElementById('root')
);
`;
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
            margin: 0;
            padding: 0;
            font-family: Fira Sans, Helvetica Neue, Apple SD Gothic Neo, Malgun Gothic, Segoe UI, sans-serif;
            font-weight: 200;
            overflow: auto !important;
          }
        `,
        }}
      />
      <a href={repositoryLink} style={{ color: "rgb(0, 135, 189)", fontWeight: 400 }}>
        <img
          alt="Fork me on GitHub"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png"
          style={{ border: 0, position: "absolute", right: 0, top: 0 }}
        />
      </a>
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "46px",
            marginBottom: "2rem",
            letterSpacing: "-1px",
          }}
        >
          React QR Code
        </h1>
        <p style={{ fontSize: "15px", color: "#111" }}>Simple QR Code for React and React Native.</p>
        <p style={{ fontSize: "15px", color: "#111" }}>
          A project by{" "}
          <a href="https://twitter.com/rosskhanas" style={{ color: "rgb(0, 135, 189)", fontWeight: 400 }}>
            Ross Khanas
          </a>
          .
        </p>
      </header>
      <main style={{ margin: "2rem auto", maxWidth: "650px", padding: "0 25px" }}>
        <h2 style={{ fontWeight: 400 }}>Demo</h2>
        <main style={{ textAlign: "center" }}>
          <div>
            <QRCode id="QRCode" title="Custom Title" value={value} />
          </div>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
              id="QRCodeScaled"
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              title="Custom Title"
              value={value}
              viewBox="0 0 256 256"
            />
          </div>
          <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
            <input
              type="button"
              value="Download QR"
              onClick={() => {
                const svg = document.getElementById("QRCode");
                const svgData = new XMLSerializer().serializeToString(svg);
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const img = new Image();
                img.onload = () => {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  ctx.drawImage(img, 0, 0);
                  const pngFile = canvas.toDataURL("image/png");
                  const downloadLink = document.createElement("a");
                  downloadLink.download = "QRCode";
                  downloadLink.href = `${pngFile}`;
                  downloadLink.click();
                };
                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
              }}
            />
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              style={{
                border: "1px solid #ccc",
                borderRadius: "2px",
                boxSizing: "border-box",
                margin: "8px 0",
                outline: "none",
                padding: "12px 20px",
                transition: "all 0.1s ease-in-out",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 5px rgba(81, 203, 238, 1)";
                e.target.style.border = "1px solid rgba(81, 203, 238, 1)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.border = "1px solid #ccc";
              }}
            />
            <p style={{ fontSize: "15px", color: "#111" }}>Non-ASCII / UTF-8 text: 한글 테스트 😊</p>
          </div>
        </main>
        <h2 style={{ fontWeight: 400 }}>Code</h2>
        <SyntaxHighlighter language="js" style={syntaxTheme}>
          {codeString}
        </SyntaxHighlighter>
      </main>
      <footer
        style={{
          color: "#999",
          fontSize: "12px",
          lineHeight: 2,
          marginBottom: "1rem",
          marginTop: "3rem",
          textAlign: "center",
        }}
      >
        Released under the{" "}
        <a href={`${repositoryLink}/blob/master/LICENSE`} style={{ color: "rgb(0, 135, 189)", fontWeight: 400 }}>
          MIT license
        </a>
        .{" "}
        <a href={repositoryLink} style={{ color: "rgb(0, 135, 189)", fontWeight: 400 }}>
          View source
        </a>
        .
      </footer>
    </div>
  );
};

export default Demo;
