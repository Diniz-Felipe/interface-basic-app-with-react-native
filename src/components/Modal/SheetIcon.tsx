import React from "react";
import { Ionicons } from '@expo/vector-icons/';

interface SheetIconProps {
    name: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
};

export const SheetIcon = ({ name, size = 24, color = '#555' }: SheetIconProps) => (
    <Ionicons name={name} size={size} color={color} />
);