import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import AppStore from './AppStore';
import Home from './home';
import About from './about';

const Navbar = createBottomTabNavigator({
  Home: Home,
  About: About,
});

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
