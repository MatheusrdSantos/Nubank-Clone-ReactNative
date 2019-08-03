import React from 'react';

import { View } from 'react-native';

import ajuda from '../../assets/ajuda.png';
import perfil from '../../assets/perfil.png';
import nuconta from '../../assets/nuconta.png';
import cartao from '../../assets/cartao.png';
import app from '../../assets/app.png';

import { Container, MenuItem, IconMenu, Description, Separator, SecondaryDescription, DescriptionContainer } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ButtonLogout from '../ButtonLogout/index';

const Menu = ({translateY}) => (
    <Container
    style={{
        opacity: translateY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }}
    >
        <Separator/>
        <MenuItem>
            <IconMenu source={ajuda}/>
            <Description>Me ajuda</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <MenuItem>
            <IconMenu source={perfil}/>
            <DescriptionContainer>
                <Description>Perfil</Description>
                <SecondaryDescription>Nome de preferência, telefone, e-mail</SecondaryDescription>
            </DescriptionContainer>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <MenuItem>
            <IconMenu source={nuconta}/>
            <Description>Configurar NuConta</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <MenuItem>
            <IconMenu source={cartao}/>
            <Description>Configurar Cartão</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <MenuItem>
            <IconMenu source={app}/>
            <Description>Configurações do app</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <ButtonLogout/>
    </Container>
);

export default Menu;
