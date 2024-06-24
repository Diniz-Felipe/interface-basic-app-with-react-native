import * as S from "./styled";

interface IAction {
    children: React.ReactNode;
    onPress: () => void;
};

export const Action = ({ onPress, children }: IAction) => { 
    return (
        <S.Action onPress={onPress}>
            {children}
        </S.Action>
    );
};