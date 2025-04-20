import js from "highlight.js/lib/languages/javascript";
import React, { Component, useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import { createGlobalStyle } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import styled from "styled-components";
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

// Updated the list view to display records in a tabular format with column headers
const ListContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

// Adjusted the table to make it wider
const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

// Added hover effect to table rows
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

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

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/fetch-qr-data")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.error("Error fetching QR data:", error));
  }, []);

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
   {/*      <SubTitle>Code</SubTitle>
        <SyntaxHighlighter language="js" style={syntaxTheme}>
          {codeString}
        </SyntaxHighlighter> */}
        <SubTitle>QR Records</SubTitle>
        <ListContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Raw Value</TableHeader>
                <TableHeader>Created At</TableHeader>
                <TableHeader>Updated At</TableHeader>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.rawTextValue}</TableCell>
                  <TableCell>{new Date(record.createdAt).toLocaleString()}</TableCell>
                  <TableCell>{new Date(record.updatedAt).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </ListContainer>
      </Content>
      <Footer>
        Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>.{" "}
        <Link href={repositoryLink}>View source</Link>.
      </Footer>
    </div>
  );
};

export default Demo;
