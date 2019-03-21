import React from 'react';
import styled from 'styled-components'
import { Text, View } from 'react-native';
import Home from './src/pages/Home'

const AppContainer = styled.View`
  background-color: #090909;
  flex: 1;
`

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}
