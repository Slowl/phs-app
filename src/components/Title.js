import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const TitleContainer = styled.View`
  padding-top: 130px;
  justify-content: center;
  flex-direction: row;
`
const CustomText = styled.Text`
  color: white;
  font-size: 92px;
  text-align: center;
`
const OrangeText = styled.Text`
  color: black;
  background-color: #ff9900;
  border-width: 2px;
  font-size: 92px;
  text-align: center;
  padding: 0px 12px 0px 12px;
  border-radius: 10px;
`

const Title = () => {
  return (
    <TitleContainer>
      <CustomText>PH</CustomText>
      <OrangeText>S</OrangeText>
    </TitleContainer>

  )
}

export default Title
