import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import Home from './src/pages/Home'
import WebBrowser from './src/pages/WebBrowser'
import About from './src/pages/About'

const TabNavigator = createBottomTabNavigator({
  Downloader: Home,
  Pornhub: WebBrowser,
  About: About,
},   {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Downloader') {
          iconName = `download`;
        } else if (routeName === 'Pornhub') {
          iconName = `film`;
        } else if (routeName === 'About') {
          iconName = `info`;
        }

        return <IconComponent name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff9900',
      // activeBackgroundColor: '#161414',
      inactiveTintColor: '#3b3a3a',
      style: {
        backgroundColor: '#000000',
        height: 65,
      },
      tabStyle: {
        padding: 10,
      },
      labelStyle: {
        fontSize: 13,
        margin: 0
      },
    }
  }
)

export default createAppContainer(TabNavigator);
