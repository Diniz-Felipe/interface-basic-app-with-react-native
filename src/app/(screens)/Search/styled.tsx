import styled, { css, DefaultTheme } from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
    ${() => css`
        background-color: ${({ theme }) => theme.colors.background};
        padding: ${({ theme }) => theme.spaces.small}px;
    `}
`;
export const Container = styled.SafeAreaView`
    ${() => css`
        flex-direction: row;
        margin-top: ${({ theme }) => theme.spaces.small}px;
        margin-bottom: ${({ theme }) => theme.spaces.small}px;
        gap: ${({ theme }) => theme.spaces.medium}px;
    `}
`