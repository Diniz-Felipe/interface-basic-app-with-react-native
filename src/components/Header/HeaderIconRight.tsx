import React from "react";
import { Button } from '@/src/components/Button';

interface IIconRight {
    onPress: () => void;
    color: string;
    size: number;
    icon?: string;
};

export const HeaderIconRight = ({ onPress, color, size, icon }: IIconRight) => {
    // button de image
    return (
        <Button.Action onPress={onPress}>
            <Button.Icon color={color} name={icon} size={size} />
        </Button.Action>
    );
};