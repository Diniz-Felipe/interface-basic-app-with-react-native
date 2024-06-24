import React from "react";
import { ItemContainer } from '@/components/Modal/styled';

interface SheetItemContentProps {
    children: React.ReactNode
};

export const SheetItemContent = ({children}: SheetItemContentProps)=> {
    return (
        <ItemContainer>
            {children}
        </ItemContainer>
    );
};