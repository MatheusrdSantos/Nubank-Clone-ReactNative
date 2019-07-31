import React from 'react';

import { View } from 'react-native';

import ajuda from '../../assets/ajuda.png';
import perfil from '../../assets/perfil.png';

import { Container, MenuItem, IconMenu, Description, Separator, SecondaryDescription, DescriptionContainer } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Menu = () => (
    <Container>
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
            <IconMenu source={ajuda}/>
            <Description>Me ajuda</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
        <MenuItem>
            <IconMenu source={ajuda}/>
            <Description>Me ajuda</Description>
            <Icon name="arrow-right" size={12} color="#FFF"/>
        </MenuItem>
        <Separator/>
    </Container>
);

export default Menu;
