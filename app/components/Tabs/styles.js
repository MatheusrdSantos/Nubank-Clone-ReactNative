import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
    overScrollMode: 'never'
})`
    margin-top: 20px;
    align-self: flex-end;
    z-index: 10;
`;

export const Tab = styled.View`
    height: 100px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-left: 10px;
    margin-bottom: 18px;
    padding: 10px;
    justify-content: space-between;
    align-self: flex-end;
`

export const TabDescription = styled.Text`
    color: #fff;
    font-size: 13px;
`

export const Icon = styled.Image`
`
