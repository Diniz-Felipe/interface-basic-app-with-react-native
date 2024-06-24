import * as S from "./styled";

interface IActions{
    children: React.ReactNode;
};

export const Actions = ({children}: IActions) => { 
    return (
        <S.Actions>
            {children}
        </S.Actions>
    );
};