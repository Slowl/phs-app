import React from 'react'
import { View, Text, TouchableOpacity, PermissionsAndroid, ToastAndroid } from 'react-native'
import styled from 'styled-components'

import RNFetchBlob from 'rn-fetch-blob'
const { config, fs } = RNFetchBlob

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
  try {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: 'PHS Internal Storage Permission',
      message:
        'PHS needs access to your Internal Storage ' +
        'to download your videos.',
        buttonPositive: 'OK',
    },
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    const DownloadDir = fs.dirs.DownloadDir
    const id = Math.random().toString(36).slice(8).padEnd(5,0)
    const options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : true,
        path:`${DownloadDir}/PHS/PHS_${quality}p-${id}.mp4`,
        description : 'Downloading Video.'
      }
    }

    ToastAndroid.showWithGravityAndOffset(
      'Downloading ... ',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );

    config(options).fetch('GET', `${url}`)
      .then((res) => {
        ToastAndroid.showWithGravityAndOffset(
          'Download completed ',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
      })
      .catch(error => {
        ToastAndroid.showWithGravityAndOffset(
          'An error occured ...',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
        console.error(error);
      });

    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Permission denied, can\'t start the download ...',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    }
  } catch (err) {
    console.warn(err);
  }
}

  return (
        <CustomButton
          activeOpacity={.7}
          onPress={donwloadFile}
          accessibilityLabel="download button"
        >
          <CustomText>{`${quality}p`}</CustomText>
        </CustomButton>
  )
}

export default Buttons
