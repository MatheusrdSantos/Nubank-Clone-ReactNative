import React from 'react';

import { View } from 'react-native';

import logo from '../../assets/nu-logo.png';

import { Container, Logo, Name, Top, Code, AccountInfo, Description, Bold } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {QRCode} from 'react-native-custom-qr-codes';
const Header = () => (
    <Container>
        <Top>
            <Logo source={logo}/>
            <Name>Matheus</Name>
        </Top>
        <Icon name="arrow-down" size={15} color="#a19da1"/>
        <Code>
            <QRCode 
                content='https://github.com/MatheusrdSantos'
                size={90}
                color="#7a2d99"
                />
        </Code>
        <AccountInfo>
            <Description>Banco <Bold>260 - Nu Pagamentos S.A.</Bold> </Description>
            <Description>Agência <Bold>0001</Bold> </Description>
            <Description>Conta <Bold>6400501-1</Bold> </Description>
        </AccountInfo>
    </Container>
);

export default Header;
