import React, { ReactNode } from "react";
import { Button } from '@/components/Button';

interface IIconLeft {
    onPress: () => void;
    color: string;
    size: number;
    icon?: string;
};

export const HeaderIconLeft = ({ onPress, color, size, icon }: IIconLeft) => {
    // button de image
    return (
        <Button.Action onPress={onPress}>
            <Button.Icon color={color} name={icon} size={size} />
        </Button.Action>
    );
};