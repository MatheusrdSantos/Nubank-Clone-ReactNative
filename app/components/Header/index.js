import React from 'react';

import { View } from 'react-native';

import logo from '../../assets/nu-logo.png';

import { Container, Logo, Name, Top, Code } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import QRCode from 'react-native-qrcode';
const Header = () => (
    <Container>
        <Top>
            <Logo source={logo}/>
            <Name>Matheus</Name>
        </Top>
        <Icon name="arrow-down" size={15} color="#a19da1"/>
        <Code>
            <QRCode
                value="https://github.com/MatheusrdSantos"
                size={80}
                bgColor="#fff"
                fgColor="#7a2d99"
            />
        </Code>
    </Container>
);

export default Header;
