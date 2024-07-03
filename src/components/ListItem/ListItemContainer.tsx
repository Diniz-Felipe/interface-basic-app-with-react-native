import { ReactNode } from "react"
import { ItemContainer } from "@/src/components/ListItem/styled";

interface IItemContainer {
    children: ReactNode;
};

export const ListItemContainer = ({ children }: IItemContainer) => {
    return <ItemContainer>
        {children}
    </ItemContainer>

};