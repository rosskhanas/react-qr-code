import React, { Component } from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import syntaxTheme from 'react-syntax-highlighter/dist/styles/vs';
import {
  AppContainer,
  Content,
  Footer,
  Header,
  Link,
  Paragraph,
  SubTitle,
  Title,
} from 'ross-ui';
import ContentCenter from '../components-styled/ContentCenter';
import GitHubImage from '../components-styled/GitHubImage';
import Input from '../components-styled/Input';
import InputContainer from '../components-styled/InputContainer';
import QRCode from '../../../lib';

registerLanguage('javascript', js);

export default class App extends Component {

  state = {
    value: 'Hello, World!',
  }

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const repositoryLink = 'https://github.com/rtkhanas/react-qr-code';
    const codeString = `
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

ReactDOM.render(
  <QRCode value="${this.state.value}" />,
  document.getElementById('root')
);
`;
    return (
      <AppContainer>
        <Link href={repositoryLink} >
          <GitHubImage
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
          />
        </Link>
        <Header>
          <Title>React QR Code</Title>
          <Paragraph>
            Simple QR Code for React and React Native.
          </Paragraph>
          <Paragraph>
            A project by <Link href="https://twitter.com/rtkhanas">Ross Khanas</Link>.
          </Paragraph>
        </Header>
        <Content>
          <SubTitle>Demo</SubTitle>
          <ContentCenter>
            <QRCode value={this.state.value} />
            <InputContainer>
              <Input type="text" value={this.state.value} onChange={this.onValueChange} />
            </InputContainer>
          </ContentCenter>
          <SubTitle>Code</SubTitle>
          <SyntaxHighlighter language="js" style={syntaxTheme}>
            {codeString}
          </SyntaxHighlighter>
        </Content>
        <Footer>
          Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>. <Link href={repositoryLink} >View source</Link>.
        </Footer>
      </AppContainer>
    );
  }
}
