import React from 'react'
import { View, Text, TextInput, Keyboard, ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather';

const SearchContainer = styled.View`
  justify-content: space-between;
  align-self: center;
  flex-direction: row-reverse;
  margin-top: 30px;
  width: 95%;
  background-color: #1c1c1c;
  border-radius: 30px;
`

const Input = styled.TextInput`
  padding: 15px;
  border-radius: 30px;
  width: 90%;
  font-size: 16px;
  color: white;
`

const CustomIcon = styled(Icon)`
  padding: 15px 15px 15px 0px;
`
const CustomActivity = styled(ActivityIndicator)`
  padding: 15px 15px 15px 0px;
`

const Search = ({ submit, onChangeText, loading }) => {
  return (
      <SearchContainer>
        {loading ? <CustomActivity hidesWhenStopped={loading}  size={25} color="#575757" /> : <CustomIcon onPress={submit} name="search" size={25} color="#575757" />}
        <Input
          keyboardType="web-search"
          placeholder="Paste your innocent link here ..."
          placeholderTextColor="#4d4d4d"
          onSubmitEditing={submit}
          onChangeText={onChangeText}
        />
      </SearchContainer>
  )
}

export default Search
