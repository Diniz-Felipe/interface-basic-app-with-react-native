import React, { ReactNode } from 'react';
import { Wrapper } from './styled';

type SheetProps = {
    children: ReactNode;
};

export const SheetRoot = ({ children }: SheetProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};