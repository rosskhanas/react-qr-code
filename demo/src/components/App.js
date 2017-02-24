import React, { Component } from 'react';
import AppContainer from '../components-styled/AppContainer';
import Content from '../components-styled/Content';
import Footer from '../components-styled/Footer';
import GitHubImage from '../components-styled/GitHubImage';
import Header from '../components-styled/Header';
import Input from '../components-styled/Input';
import InputContainer from '../components-styled/InputContainer';
import Link from '../components-styled/Link';
import Paragraph from '../components-styled/Paragraph';
import Title from '../components-styled/Title';
import QRCode from '../../../lib';

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
            A project by <Link href="https://github.com/rtkhanas">Ross Khanas</Link>.
          </Paragraph>
        </Header>
        <Content>
          <QRCode value={this.state.value} />
          <InputContainer>
            <Input type="text" value={this.state.value} onChange={this.onValueChange} />
          </InputContainer>
        </Content>
        <Footer>
          Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>. <Link href={repositoryLink} >View source</Link>.
        </Footer>
      </AppContainer>
    );
  }
}
