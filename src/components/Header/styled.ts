import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${() => css`
        height: ${({ theme }) => theme.height.default}px;
        
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: ${({ theme }) => theme.colors.background};

        padding-left: ${({ theme }) => theme.spaces.medium}px; 
        padding-right: ${({ theme }) => theme.spaces.medium}px;
    `}
`;
export const Profile = styled.Image`
`;