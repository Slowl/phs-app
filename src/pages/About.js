import React from 'react'
import { View, ScrollView, Text, Linking } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather';

const ViewContainer = styled.ScrollView`
  background-color: #0f0f0f;
  flex: 1;
`

const Title = styled.View`
  margin-top: 80px;
`

const TitleText = styled.Text`
  font-size: 48px;
  color: white;
  text-align: center;
`

const TextContainer = styled.View`
  padding: 30px;
`
const TextCustom = styled.Text`
  color: white;
  font-size: 15px;
`

const TitleContainer = styled.View`
  padding: 20px 0 10px 0;
`

const TextTitle = styled.Text`
  color: #e78a00;
  font-size: 28px;
`

const ContactView = styled.View`
  padding-top: 10px;
`
const Link = styled.Text`
  color: #c9c9c9;
  font-weight: 800;
  font-size: 18px;
`

const CustomIcon = styled(Icon)`
  padding: 20px;
  margin: 20px;
`

const About = () => {

  return (
    <ViewContainer>
      <Title>
        <TitleText> What's PHS ? </TitleText>
        <TextContainer>
          <TextCustom>
            The acronym for Pornhub Source, it's a tool that helps you download
            Pornhub (community) videos when you can't simply
            "long press" / "right click" on the video.
          </TextCustom>
          <TitleContainer><TextTitle>How to use ?</TextTitle></TitleContainer>
          <TextCustom>
            {`- Go on your favorite Pornhub video, copy the link from the address bar, and paste it in the downloader.
- Then press on the quality you want to download.
- You'll find the video in "Download/PHS/" folder.
            `}
          </TextCustom>
          <TitleContainer><TextTitle>The Creator ?</TextTitle></TitleContainer>
          <TextCustom>
            {`That's the fabulous and magnificent Hedi.
Don't hesite to contact him or ask him any questions.
`}
          </TextCustom>
          <ContactView>
            <Link
              onPress={() => Linking.openURL('https://hedik.fr/')}>
              <CustomIcon name="external-link" size={20} color="#e78a00" />
              {"   "}hedik.fr
            </Link>
          </ContactView>
          <ContactView>
            <Link
              onPress={() => Linking.openURL('mailto:contact@hedik.fr')}>
              <CustomIcon name="mail" size={20} color="#e78a00" />
              {"   "}contact@hedik.fr
            </Link>
          </ContactView>
            </TextContainer>
      </Title>
    </ViewContainer>
  )
}

export default About
