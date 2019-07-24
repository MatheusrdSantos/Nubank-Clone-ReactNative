import React from 'react';

import { View } from 'react-native';

import { Container, Bottom, Content, Description, Top, Title, ContentTitle, Balance } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
const Card = () => (
    <Container>
        <Top>
            <Icon name="coin" size={25} color="#878383"/>
            <Title>NuConta</Title>
            <Icon name="eye-off-outline" size={25} color="#878383"/>
        </Top>
        <Content>
            <ContentTitle>Saldo disponível</ContentTitle>
            <Balance>R$ 92.483,45</Balance>
        </Content>
        <Bottom>
            <Icon name="barcode" size={25}/>
            <Description>Boleto de R$ 109,78 pago quinta</Description>
            <SimpleIcon name="arrow-right" size={10} color="#a19da1"/>
        </Bottom>
    </Container>
);

export default Card;