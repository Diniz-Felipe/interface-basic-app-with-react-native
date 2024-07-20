import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${() => css`
        background-color: ${({theme})=>theme.colors.background};
        flex: 1;
        padding: ${({theme})=>theme.spaces.small}px;
    `}
`;