/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <Fragment>
       <StatusBar
        backgroundColor="#7a2d99"
        barStyle="light-content"
        />
      <View style={{flex:1, backgroundColor: '#7a2d99', alignItems: 'stretch'}}>
          <Header/>
          <Card/>
          <Tabs/>
      </View>
    </Fragment>
  );
};

export default App;
