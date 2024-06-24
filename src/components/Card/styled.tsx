import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 48.5%;
    height: 210px;

    background-color: #ddd;
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
`;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
    width: 45%;

    padding: 5px;
    margin: 5px;
    background-color: beige;
    border-radius: 10px;
`;