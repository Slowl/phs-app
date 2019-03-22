import React from 'react'
import { View, Text, TouchableOpacity, Clipboard, ToastAndroid } from 'react-native'
import styled from 'styled-components'
import { WebView } from 'react-native-webview'
import Icon from 'react-native-vector-icons/Feather';
const WEBVIEW_REF = "WEBVIEW_REF";
import ProgressBar from 'react-native-progress/Bar';

const WebViewWrapper = styled.View`
  flex: 1;
  background-color: #0f0f0f;
  overflow: hidden;
  justify-content: center;
`
const NavBar = styled.View`
  justify-content: space-between;
  flex-direction: row;
  max-width: 100%;
  min-width: 100%;
  margin: auto;
  background-color: #2a2a2e;
`
const NavButtonsBack = styled.TouchableOpacity`
  padding: 20px;
  background-color: #2a2a2e;
`
const NavButtonsForw = styled.TouchableOpacity`
  padding: 20px;
  background-color: #2a2a2e;
`
const UrlContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: #2f2f34;
  min-width: 65%;
  max-width: 65%;
  border-radius: 80px;
`
const TextUrl = styled.Text`
  color: white;
`
const LoaderPlaceholder = styled.View`
  background-color: transparent;
  height: 2px;
  width: auto;
`

class WebBrowser extends React.Component {

  state = {
    canGoBack:false,
    canGoForward: false,
    url: "",
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward,
      url: navState.url,
      loading: navState.loading
    });
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }
  onForward() {
    this.refs[WEBVIEW_REF].goForward();
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.url);
    ToastAndroid.showWithGravityAndOffset(
      'URL copied to clipboard.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  render(){
    return (

        <WebViewWrapper>
          {this.state.loading ?
            <ProgressBar
              height={2}
              color="#e78a00"
              indeterminate={true}
              indeterminateAnimationDuration={800}
              useNativeDriver={true}
              width={null}
              borderWidth={0}
              borderRadius={0}
            /> :
            <LoaderPlaceholder />
          }
          <WebView
            ref={WEBVIEW_REF}
            source={{ uri: "https://www.pornhub.com/" }}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            incognito={true}
            startInLoadingState={true}
          />
          <NavBar>
            <NavButtonsBack
              opacity={0.6}
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}
            >
              <Icon name="arrow-left" size={20} color="white" />
            </NavButtonsBack>

            <UrlContainer onPress={this.writeToClipboard}>
              <TextUrl numberOfLines={ 1 }> {this.state.url} </TextUrl>
            </UrlContainer>

            <NavButtonsForw
              opacity={0.6}
              disabled={!this.state.canGoForward}
              onPress={this.onForward.bind(this)}
            >
              <Icon name="arrow-right" size={20} color="white" />
            </NavButtonsForw>

          </NavBar>
        </WebViewWrapper>

    )
  }
}

export default WebBrowser
