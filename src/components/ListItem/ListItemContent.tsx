import React from 'react';
import { Text } from "@/src/components/Text";

interface IListItemContent {
    text?: string | number;
};

export const ListItemContent = ({ text }: IListItemContent) => (
    <Text medium>{text}</Text>
);