
import styled from 'styled-components'
import { Animated } from 'react-native';
export const Container = styled(Animated.View)`
    /*position: absolute;
    top: 80px;
    left: 0px;
    right: 0px;*/
    background-color: #fff;
    height: 380px;
    margin: 30px 20px 0 20px;
    border-radius: 3px;
    
`

export const Bottom = styled.View`
    background-color: #f7f7f7;
    height: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
`
export const Content = styled.View`
    flex-grow: 1;
    padding: 0 25px 0 25px;
    justify-content: center;
`

export const Description = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
`

export const Top = styled.View`
    padding: 20px 25px 0px 25px; 
    flex-direction: row;
`

export const Title = styled.Text`
    margin-left: 10px;
    color: #878383;
    font-size: 16px;
    align-self: flex-end;
    flex-grow: 1;
`

export const ContentTitle = styled.Text`
    color: #878383;
    font-size: 16px;
`

export const Balance = styled.Text`
    color: #302e2e;
    font-size: 32px;
`

export const TopIcon = styled.Image`

`