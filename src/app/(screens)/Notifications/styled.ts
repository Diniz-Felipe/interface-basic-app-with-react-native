import styled, { css } from "styled-components/native";

export const Container =  styled.SafeAreaView` 
    ${() => css`
        flex: 1;
        padding: ${({theme}) => theme.spaces.small}px;
        padding-bottom: ${({theme}) => theme.spaces.small}px;
        background-color: ${({theme}) => theme.colors.background};
    `}
`;
