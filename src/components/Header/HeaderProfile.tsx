import React, { ReactNode } from "react";
import { Profile } from '@/components/Header/styled';
import { Button } from '@/components/Button';

interface IProfile {
    image: string;
    onPress: () => void;
};

export const HeaderProfile = ({ image, onPress }: IProfile) => {
    // button de image
    return (
        <Button.Action onPress={onPress}>
            <Profile src={image} />
        </Button.Action>
    );
};