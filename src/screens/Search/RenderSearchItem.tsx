import React from "react";
import { ListItem } from "@/src/components/ListItem";
import { IData, useSearch } from "./useSearch";

export const RenderSearchItem = ({ id, name, description, imageURL }: IData) => {
    const { actionSearchItem } = useSearch();
    return (
        <ListItem.Root key={id} action={actionSearchItem}>
            <ListItem.Content text={imageURL} />

            <ListItem.ItemContainer>
                <ListItem.Content text={name} />
                <ListItem.Content text={description} />
            </ListItem.ItemContainer>
        </ListItem.Root>
    )
};