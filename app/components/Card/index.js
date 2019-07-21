import React from 'react';

import { View } from 'react-native';

import { Container, Bottom, Content, Description } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
const Card = () => (
    <Container>
        <Content></Content>
        <Bottom>
            <Icon name="barcode" size={25}/>
            <Description>Boleto de R$ 109,78 pago quinta</Description>
            <SimpleIcon name="arrow-right" size={10} color="#a19da1"/>
        </Bottom>
    </Container>
);

export default Card;