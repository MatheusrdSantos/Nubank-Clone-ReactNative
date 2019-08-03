import React, {Component} from 'react';

import { View } from 'react-native';

import { Container, Bottom, Content, Description, Top, Title, ContentTitle, Balance, TopIcon } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import nuconta from '../../assets/nuconta-dark.png';
export default class Card extends  Component{
    
    render(){
        return (
            <Container>
                <Top>
                    <TopIcon source={nuconta}/>
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
        )
    }
};

//export default Card;