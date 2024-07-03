import React from "react";
import { Button } from '@/src/components/Button';
import { Ionicons } from "@expo/vector-icons";

interface IIconLeft {
    onPress: () => void;
    color: string;
    size: number;
    icon: keyof typeof Ionicons.glyphMap;
};

export const HeaderIconLeft = ({ onPress, color, size, icon }: IIconLeft) => {
    // button de image
    return (
        <Button.Action onPress={onPress}>
            <Button.Icon color={color} name={icon} size={size} />
        </Button.Action>
    );
};