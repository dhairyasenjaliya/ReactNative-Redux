/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://www.valentinog.com/blog/redux/
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import store from './src/js/store/index';
import { addArticle } from './src/js/actions/index';

window.store = store;
window.addArticle = addArticle;
 
type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){

      console.warn(store.getState());
      store.subscribe(() => console.warn('Look ma, Redux!!'));
      store.dispatch(addArticle({ book: 'React Redux Tutorial for Beginners', id: 1 }));
      console.warn(store.getState());
      
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! </Text>
        <Text>Start Redux</Text> 
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
