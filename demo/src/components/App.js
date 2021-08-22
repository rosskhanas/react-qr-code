import React, { Component } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "highlight.js/lib/languages/javascript";
import syntaxTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import { createGlobalStyle } from "styled-components";
import Content from "../components-styled/Content";
import ContentCenter from "../components-styled/ContentCenter";
import Footer from "../components-styled/Footer";
import GitHubImage from "../components-styled/GitHubImage";
import Header from "../components-styled/Header";
import Input from "../components-styled/Input";
import InputContainer from "../components-styled/InputContainer";
import Link from "../components-styled/Link";
import Paragraph from "../components-styled/Paragraph";
import SubTitle from "../components-styled/SubTitle";
import Title from "../components-styled/Title";
import QRCode from "../lib";

const GlobalStyle = createGlobalStyle`
body{margin:0;padding:0;font-family:Fira Sans,Helvetica Neue,Apple SD Gothic Neo,Malgun Gothic,Segoe UI,sans-serif;font-weight:200;}
`;

SyntaxHighlighter.registerLanguage("javascript", js);

class App extends Component {
  state = {
    value: "Hello, World!",
  };

  onImageCownload = () => {
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
  };

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
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
            <QRCode id="QRCode" title="Custom Title" value={value} />
            <InputContainer>
              <input type="button" value="Download QR" onClick={this.onImageCownload} />
              <Input type="text" value={value} onChange={this.onValueChange} />
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
  }
}

export default App;
