import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import AppStore from './AppStore';
import Home from './home';
import About from './about';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = createBottomTabNavigator(
	{
	  Home: Home,
	  About: About,
	},
	{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'About') {
          iconName = `info-circle`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    	<Provider AppStore={AppStore}>
      		<Navbar />
      	</Provider>
    );
  }
}
