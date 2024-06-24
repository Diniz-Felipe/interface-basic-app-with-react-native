import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    border-radius: 25px;
`;
export const PopupContent = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    gap: 17px;
`;
export const CheckBox = styled.Switch`
    height: 30px;
    width: 30px;
    border: 10px;
    padding: 20px;
`;
export const Icon = styled.TouchableOpacity`
    padding: 4px;
    /* background-color: blue; */
`;