import React from 'react'
import { View, ScrollView, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import SplashScreen from 'react-native-splash-screen'

import Title from '../components/Title'
import Search from '../components/Search'
import Buttons from '../components/Buttons'

const ViewContainer = styled.ScrollView`
  background-color: #0f0f0f;
  flex: 1;
`

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`

const ErrorContainer = styled.View`
  margin-top: 40px;
  padding: 10px;
  background-color: #d54b4b;
`
const ErrorText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`

class Home extends React.Component {

  state = {
    inputVal : '',
    data: '',
    loading: false,
    error: false,
  }

  componentDidMount(){
    setTimeout(() => {
     SplashScreen.hide()
   }, 500)
  }

  SearchFunc = () => {
    const sourceRequest = async () => {
        this.setState({error: false})
        this.setState({ loading: true })
        const response = await fetch(`${this.state.inputVal}`)
        const source = await response.text()
        const uglySource = await source.split(`"mediaDefinitions":`)[1]
        const lessUglySource = uglySource.split("}]")
        const formatedSource = lessUglySource[0] + "}]"
        const preciousData = JSON.parse(formatedSource)
        this.setState({ loading: false })
        return preciousData
    }

    sourceRequest()
    .then(sourceCode => this.setState({data: sourceCode}))
    .catch(error => {
      this.setState({ loading: false })
      this.setState({error: true})
    })
  }

  handleChangeText = (text) => {
    const formatedvalue = text.trim()
    this.setState({inputVal: formatedvalue})
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
        <ViewContainer>
          <Title />
          <Search submit={this.SearchFunc} onChangeText={this.handleChangeText} loading={this.state.loading}/>
          {!!this.state.error && <ErrorContainer><ErrorText>An error occured, please check your link and try again.</ErrorText></ErrorContainer>}
          <ButtonsContainer>
            {!!this.state.data && (
              this.state.data.map(
                (datas, key) => (
                  datas.format === "mp4" && (
                    <Buttons key={key} url={datas.videoUrl} quality={datas.quality} />
                  )
                )
              )
            )}
          </ButtonsContainer>
        </ViewContainer>
      </TouchableWithoutFeedback>
        )
  }
}

export default Home
