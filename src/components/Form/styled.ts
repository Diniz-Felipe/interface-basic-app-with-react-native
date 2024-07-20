import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    gap: 10px;
`;

export const TextInput = styled.TextInput`
    ${() => css`
        height: 65px;
        min-width: 82%;
        
        background-color: ${({ theme }) => theme.colors.secundary};

        padding: 10px;
        
        border-width: 1px;
        border-radius: ${({ theme }) => theme.radius.medium}px;
        border-color: #ddd; 
    `}
`;