import React, { ReactNode } from "react";
import { Text } from '@/components/Text';
import { useRoute } from "@react-navigation/native";

interface IName {};

export const HeaderName = ({}: IName) => {
    const { name } = useRoute();
    // button de image
    return (
        <Text large>{name}</Text>
    );
};