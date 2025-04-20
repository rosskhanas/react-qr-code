import js from "highlight.js/lib/languages/javascript";
import React, { Component } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import { createGlobalStyle } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import QRCode from "./lib";
import Content from "./web/Content";
import ContentCenter from "./web/ContentCenter";
import Footer from "./web/Footer";
import GitHubImage from "./web/GitHubImage";
import Header from "./web/Header";
import Input from "./web/Input";
import InputContainer from "./web/InputContainer";
import Link from "./web/Link";
import Paragraph from "./web/Paragraph";
import SubTitle from "./web/SubTitle";
import Title from "./web/Title";

const GlobalStyle = createGlobalStyle`
body{margin:0;padding:0;font-family:Fira Sans,Helvetica Neue,Apple SD Gothic Neo,Malgun Gothic,Segoe UI,sans-serif;font-weight:200;}
`;

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

  const handleDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      const qrId = uuidv4(); // Assign an auto generated UUID
      const rawTextValue = value; // The raw text value of the QR code
      const timestamp = new Date().toISOString();

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode"+qrId;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();

      console.log({
        id: qrId,
        rawTextValue,
        createdAt: timestamp,
        updatedAt: timestamp
      });

      // Send QR code data to the backend
      axios.post("http://localhost:3001/save-qr-data", {
        id: qrId,
        rawTextValue,
        createdAt: timestamp,
        updatedAt: timestamp
      })
      .then(() => {
        console.log("QR code "+qrId+ " saved successfully.");
      })
      .catch((error) => {
        console.error("Error saving QR code data:", error);
      });
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div>
      <GlobalStyle />
      <Link href={repositoryLink}>
        <GitHubImage
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
        />
      </Link>
      <Header>
        <Title>React QR Code</Title>
        <Paragraph>Simple QR Code for React and React Native.</Paragraph>
        <Paragraph>
          A project by <Link href="https://twitter.com/rosskhanas">Ross Khanas</Link>.
        </Paragraph>
      </Header>
      <Content>
        <SubTitle>Demo</SubTitle>
        <ContentCenter>
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
          <InputContainer>
            <input
              type="button"
              value="Download QR"
              onClick={handleDownload}
            />
            <Input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </InputContainer>
        </ContentCenter>
        <SubTitle>Code</SubTitle>
        <SyntaxHighlighter language="js" style={syntaxTheme}>
          {codeString}
        </SyntaxHighlighter>
      </Content>
      <Footer>
        Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>.{" "}
        <Link href={repositoryLink}>View source</Link>.
      </Footer>
    </div>
  );
};

export default Demo;
