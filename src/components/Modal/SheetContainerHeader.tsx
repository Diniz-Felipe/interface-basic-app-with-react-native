import React from 'react';
import { HeaderContainer } from '@/src/components/Modal/styled';

interface SheetContainerHeaderProps {
    children: React.ReactNode
};

export const SheetContainerHeader = ({ children }: SheetContainerHeaderProps) => {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    );
};