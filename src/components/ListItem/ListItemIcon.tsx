import React from 'react';
import { ElementType } from "react";
import { Ionicons } from '@expo/vector-icons';

interface IListItemIcon {
    size?: number;
    color?: string;
    icon?: ElementType;
    name?: keyof typeof Ionicons.glyphMap;
};

export const ListItemIcon = ({ name, size = 24, color = '#555' }: IListItemIcon) => (
    <Ionicons 
        name={name} 
        size={size} 
        color={color} 
    />
);