import styled, { css } from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
    ${() => css`
        flex: 1;
        padding: 10px;
        gap: 10px;
        background-color: ${({ theme }) => theme.colors.background};
    `}
`;
export const Container = styled.SafeAreaView`
    flex-direction: row;
    padding: 10px;
    gap: 10px;
`;