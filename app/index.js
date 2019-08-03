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
  StatusBar,
  Animated,
  Text
} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Tabs from './components/Tabs';
import {State, PanGestureHandler} from 'react-native-gesture-handler';

export default function App(){
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  function onHandlerStateChanged(event){

  }

  return (
    <Fragment>
       <StatusBar
        backgroundColor="#7a2d99"
        barStyle="light-content"
        />
      <View style={{flex:1, backgroundColor: '#7a2d99', alignItems: 'stretch'}}>
          <Header/>
          <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
          >
              
            <Animated.View
            style={
              {
                position: 'absolute',
                top: 80,
                left: 0,
                right: 0,
                zIndex: 5,
                transform: [{
                  translateY: translateY
                }]
              }
            }>
              <Card/>
            </Animated.View>
          </PanGestureHandler>
          <Tabs/>
      </View>
    </Fragment>
  );
};
