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
  let offset = 0;
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
    if(event.nativeEvent.oldState == State.ACTIVE){
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset+=translationY;
      translateY.setOffset(offset);
      translateY.setValue(0);

      if(translationY>=50){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened? 475: 0,
        timing: 100,
        useNativeDriver: true
      }).start(() =>{
        offset = opened? 475:0,
        translateY.setOffset(offset);
        translateY.setValue(0);
      })
    }
  }

  return (
    <Fragment>
       <StatusBar
        backgroundColor="#7a2d99"
        barStyle="light-content"
        />
      <View style={{flex:1, backgroundColor: '#7a2d99', alignItems: 'stretch'}}>
          <Header translateY={translateY}/>
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
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 475],
                    outputRange: [-35, 0, 475],
                    extrapolate: 'clamp'
                  })
                }]
              }
            }>
              <Card/>
            </Animated.View>
          </PanGestureHandler>
          <Tabs translateY={translateY}/>
      </View>
    </Fragment>
  );
};
