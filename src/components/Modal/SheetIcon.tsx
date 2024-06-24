import React from "react";
import { ElementType } from "react";
import { Ionicons } from '@expo/vector-icons/';

interface SheetIconProps {
    name?: any
    size?: number
    color?: string
    icon?: ElementType
};

export const SheetIcon = ({ icon: Icon, name, size, color }: SheetIconProps) => (
    <Ionicons name={name} size={size || 24} color={color} />
);