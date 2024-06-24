import React from 'react';
import { ElementType } from "react";
import { Ionicons } from '@expo/vector-icons';

interface IListItemIcon {
    size?: number;
    color?: string;
    icon?: ElementType;
    name?: any;
};

export const ListItemIcon = ({ name, size, color }: IListItemIcon) => (
    <Ionicons 
        name={name} 
        size={size || 24} 
        color={color} 
    />
);