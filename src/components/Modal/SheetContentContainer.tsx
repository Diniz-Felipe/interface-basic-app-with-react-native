import React from "react";
import { ContentContainer } from '@/components/Modal/styled';

interface SheetContentContainerProps {
    children: React.ReactNode
};

export const SheetContentContainer = ({ children }: SheetContentContainerProps) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    );
};