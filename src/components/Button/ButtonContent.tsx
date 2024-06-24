import React, { ReactNode } from 'react';
import { Content } from '@/src/components/Button/styled';

interface IContent {
    children: ReactNode;
};

export const ButtonContent = ({ children }: IContent) => {
    return (
        <Content>
            {children}
        </Content>
    );
};