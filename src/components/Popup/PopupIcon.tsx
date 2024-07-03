import React from "react";
import { Ionicons } from '@expo/vector-icons';

interface IPopupIcon {
    name: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
};

export const PopupIcon = ({ size, name, color }: IPopupIcon) => {
    return (
        <Ionicons name={name} size={size} color={color} />
    );
};