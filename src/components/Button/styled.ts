import styled, { css } from "styled-components/native";

export const Content = styled.View`
    flex-direction: row;
`;

export const Touchable = styled.TouchableOpacity`
    ${() => css`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        background-color: ${({theme}) => theme.colors.secundary};
        border-radius: 10px;
        padding: ${({ theme }) => theme.spaces.small}px;
        gap: 10px;
    `}
`;