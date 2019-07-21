import React from 'react';

import { View } from 'react-native';

import logo from '../../assets/nu-logo.png';

import { Container, Logo, Name, Top } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
const Header = () => (
    <Container>
        <Top>
            <Logo source={logo}/>
            <Name>Matheus</Name>
        </Top>
        <Icon name="arrow-down" size={15} color="#a19da1"/>
    </Container>
);

export default Header;
