import React from "react";
import { Text } from '@/src/components/Text';

interface IPopupText{
    text: string;
};

export const PopupText = ({ text }: IPopupText) => {
    return <Text large>{text}</Text>
};