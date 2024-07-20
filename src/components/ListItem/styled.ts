import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Switch = styled.Switch`
    ${() => css`
        border-radius: ${({ theme }) => theme.radius.medium}px;
    `}
`;

export const ListItem = styled.TouchableOpacity`
    ${() => css`
        min-height: ${({ theme }) => theme.height.default}px; 
        flex-direction: row;
        align-items: center;

        background-color: ${({theme}) => theme.colors.secundary};

        padding: ${({ theme }) => theme.spaces.small}px;
        gap: ${({ theme }) => theme.spaces.large}px;

        border-radius: ${({ theme }) => theme.radius.default}px;
    `}
`;
export const ItemContainer = styled.View`
    flex-direction: column;
`;