import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, FlatList} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

type Props = {};
export default class Home extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      data:[],
    }
  }

  componentWillMount(){
    this.loadfromphp();
    
  }

  loadfromphp(){
    axios.get('https://delowarhossaintb.000webhostapp.com/dynamic.php/users')
    .then((res) => {
      console.log(res)
      this.setState({data:res.data})
    })
    .catch(() => {
      console.log(error)
    })
  }

  savetophp(){
    axios.post('https://delowarhossaintb.000webhostapp.com/dynamic.php/users', {
      name:'Sanjida',
      email:'san@yahoo.com',
      pass:4512,
    })
    .then((res) => {
      console.log(res)
    })
    .catch(() => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          instructions
           <Icon name="caret-down" color={"#red"} size={15} />
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
