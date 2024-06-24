import React, { ReactNode } from "react";
import * as S from '@/src/components/Popup/styled';

interface IPopupContentItem{ 
    onPress?:() => void; 
    children: ReactNode;
};

export const PopupContentItem = ({ children, onPress }: IPopupContentItem) => {
    return (
        <S.PopupContent onPress={onPress}>
            {children}
        </S.PopupContent> 
    );
};