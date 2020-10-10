import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      pic: 'https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg'
    };
  };
  
  apiHandler = () => {
    const rand = Math.floor(Math.random() * 1000)
    const url = "https://dog.ceo/api/breed/terrier/images"
    fetch(url).then((res) => res.json())
      .then((resJson) => {
        this.setState({ pic: resJson.message[rand] })
      })
  }
  
  render () {
    const { pic } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pupperific Pictures</Text>
        {
          pic && (
            <Image source = {{ uri: pic }} style={styles.image} />
          )
        }
        <TouchableOpacity
          onPress={this.apiHandler}
          style={styles.button}>
          <Text style={styles.text}>See More Pups!</Text>
        </TouchableOpacity>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: "center"
  },
  button: {
    marginTop: 12,
    height: 50,
    width: 225,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 42,
    backgroundColor: "white"
  },
  text: {
    color: "purple", 
    fontWeight: "bold",
    fontSize: 20
  },
  title: {
    color: "purple",
    textAlign: "center",
    marginBottom: 95,
    fontSize: 40,
    fontFamily: "serif",
    fontWeight: "bold",
    fontStyle: "italic",
    textTransform: "uppercase",
    marginHorizontal: 15
  },
  image: {
    height: 325, 
    width: 325,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: "grey"
  }
});
