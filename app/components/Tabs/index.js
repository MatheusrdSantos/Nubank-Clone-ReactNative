import React from 'react';

import { View } from 'react-native';

import { Container, Tab, TabDescription, Icon } from './styles';
import indicarAmigo from '../../assets/indicar-amigo.png';
import cobrar from '../../assets/cobrar.png';
import emprestimos from '../../assets/emprestimos.png';
import depositar from '../../assets/depositar.png';
import transferir from '../../assets/transferir.png';
import ajustarLimite from '../../assets/ajustar-limite.png';
import pagar from '../../assets/pagar.png';
import bloquearCartao from '../../assets/bloquear-cartao.png';
import cartaoVirtual from '../../assets/cartao-virtual.png';
import organizarAtalhos from '../../assets/organizar-atalhos.png';
const Tabs = ({translateY}) => (
    <Container
    style={{
        opacity: translateY.interpolate({
            inputRange: [0, 200],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }}>
        <Tab>
            <Icon source={indicarAmigo}/>
            <TabDescription>Indicar amigos</TabDescription>
        </Tab>
        <Tab>
            <Icon source={cobrar}/>
            <TabDescription>Cobrar</TabDescription>
        </Tab>
        <Tab>
            <Icon source={emprestimos}/>
            <TabDescription>Empréstimos</TabDescription>
        </Tab>
        <Tab>
            <Icon source={depositar}/>
            <TabDescription>Depositar</TabDescription>
        </Tab>
        <Tab>
            <Icon source={transferir}/>
            <TabDescription>Transferir</TabDescription>
        </Tab>
        <Tab>
            <Icon source={ajustarLimite}/>
            <TabDescription>Ajustar limite</TabDescription>
        </Tab>
        <Tab>
            <Icon source={pagar}/>
            <TabDescription>Pagar</TabDescription>
        </Tab>
        <Tab>
            <Icon source={bloquearCartao}/>
            <TabDescription>Bloquer cartão</TabDescription>
        </Tab>
        <Tab>
            <Icon source={cartaoVirtual}/>
            <TabDescription>Cartão virtual</TabDescription>
        </Tab>
        <Tab>
            <Icon source={organizarAtalhos}/>
            <TabDescription>Organizar atalhos</TabDescription>
        </Tab>
    </Container>
);

export default Tabs;
