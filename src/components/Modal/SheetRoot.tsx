import React, { ReactNode, } from 'react';
import { PaperProvider } from 'react-native-paper';

type SheetProps = {
    children: ReactNode;
};

export const SheetRoot = ({ children }: SheetProps) => {
    return (
        <PaperProvider>
            {children}
        </PaperProvider>
    );
};