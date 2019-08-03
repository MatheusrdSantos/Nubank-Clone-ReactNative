import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';
export const Container = styled(Animated.View)`
    align-self: stretch;
    padding: 10px 25px 10px 25px;
    margin-top: 10px;
`

export const MenuItem = styled.View`
    color: #FFF;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px 10px 0px;
`

export const IconMenu = styled.Image`
`

export const Separator =  styled.View`
    align-self: stretch;
    height: ${StyleSheet.hairlineWidth};
    background: rgba(218,208,208,0.66);
`

export const DescriptionContainer = styled.View`
    flex-grow: 1;
`

export const Description = styled.Text`
    flex-grow: 1;
    text-align: left;
    color: #FFF;
    padding-left: 15px;
`
export const SecondaryDescription = styled.Text`
    text-align: left;
    color: rgba(255,255,255,0.59);
    padding-left: 15px;
    font-size: 11px;
`

