import React from "react";
import { ItemContainer } from '@/src/components/Modal/styled';

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