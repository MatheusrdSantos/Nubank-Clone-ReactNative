import React from 'react';

import { View } from 'react-native';

import { Container, Tab, TabDescription, Icon } from './styles';
import indicarAmigo from '../../assets/indicar-amigo.png';
import cobrar from '../../assets/cobrar.png';
import emprestimos from '../../assets/emprestimos.png';
const Tabs = () => (
    <Container>
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
            <TabDescription>Depositar</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Transferir</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Ajustar limite</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Pagar</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Bloquer cartão</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Cartão virtual</TabDescription>
        </Tab>
        <Tab>
            <TabDescription>Organizar atalhos</TabDescription>
        </Tab>
    </Container>
);

export default Tabs;
