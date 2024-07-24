import React from "react";
import { Button } from '@/src/components/Button';
import { Ionicons } from "@expo/vector-icons";

interface IIconRight {
    onPress: () => void;
    color: string;
    size: number;
    icon: keyof typeof Ionicons.glyphMap;
};

export const HeaderIconRight = ({ onPress, color, size, icon }: IIconRight) => {
    // button de image
    return (
        <Button.Action onPress={onPress}>
            <Button.Icon color={color} name={icon} size={size} />
        </Button.Action>
    );
};