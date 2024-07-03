import { ReactNode } from "react";
import { Portal } from "react-native-paper";

interface PortalProps {
    children: ReactNode;
};

export const SheetPortal = ({ children }: PortalProps) => {
    return <Portal>
        {children}
    </Portal>
};