import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${() => css`
        flex: 1;
        padding: ${({theme}) => theme.spaces.small}px;
        gap: ${({theme}) => theme.spaces.small}px;
        background-color: ${({ theme }) => theme.colors.background};
    `}
`;