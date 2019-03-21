import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`
const CustomButton = styled.TouchableOpacity`
  color: white;
  width: 25%;
  margin: 5px;
  background-color: #0082cb;
  padding: 20px 0px 20px 0px;
`

const CustomText = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`

const Buttons = ({ url, quality }) => {

const donwloadFile = async () => {
  const id = Math.random().toString(36).slice(8).padEnd(5,0)
  
}

  return (
        <CustomButton
          activeOpacity={.7}
          onPress={donwloadFile}
          accessibilityLabel="quality button"
        >
          <CustomText>{`${quality}p`}</CustomText>
        </CustomButton>
  )
}

export default Buttons
