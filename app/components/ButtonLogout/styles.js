import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.TouchableNativeFeedback`
  
`;

export const Button = styled.View`
    border-color: rgba(218,208,208,0.66);
    border-style: solid;
    border-width: ${StyleSheet.hairlineWidth};
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 10px;
    margin-top: 10px;
`

export const Description = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
`