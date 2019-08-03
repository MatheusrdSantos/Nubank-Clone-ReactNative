import React from 'react';
import { View } from 'react-native';
import logo from '../../assets/nu-logo.png';
import { Container, Logo, Name, Top, Code, AccountInfo, Description, Bold, IconMenu } from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {QRCode} from 'react-native-custom-qr-codes';
import Menu from '../Menu';
const Header = ({translateY}) => (
    <Container>
        <Top>
            <Logo source={logo}/>
            <Name>Matheus</Name>
        </Top>
        <Icon name="arrow-down" size={15} color="#a19da1"/>
        <Code style={{
          opacity: translateY.interpolate({
              inputRange: [0, 300],
              outputRange: [0, 1],
              extrapolate: 'clamp'
          })
      }}>
            <QRCode 
                content='github.com/MatheusrdSantos'
                size={100}
                color="#7a2d99"
                padding={2}
                />
        </Code>
        <AccountInfo
        style={{
            opacity: translateY.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 1],
                extrapolate: 'clamp'
            })
        }}>
            <Description>Banco <Bold>260 - Nu Pagamentos S.A.</Bold> </Description>
            <Description>Agência <Bold>0001</Bold> </Description>
            <Description>Conta <Bold>6400501-1</Bold> </Description>
        </AccountInfo>
        <Menu translateY={translateY}/>
    </Container>
);

export default Header;
