import React, { ReactNode } from "react";
import { Container } from '@/components/Popup/styled';

interface IPopupRoot {
    children: ReactNode;
};

export const PopupRoot = ({ children }: IPopupRoot) => {
    return (
        <Container>
            {children}
        </Container>
    );
};