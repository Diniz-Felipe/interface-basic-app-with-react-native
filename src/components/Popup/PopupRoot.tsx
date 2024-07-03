import React, { ReactNode } from "react";
import { Container } from '@/src/components/Popup/styled';

interface IPopupRoot {
    children: ReactNode;
};

export const PopupRoot = ({ children }: IPopupRoot) => {
    return <Container>
        {children}
    </Container>
}