import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Text } from '@/src/components/Text';

interface IPopupAction {
    icon: any;
    onClick: () => void;
    name: any;
    color: string;
    size: number;
    text: string;
};

export const PopupAction = ({ 
    onClick, 
    color, size, name, text 
}: IPopupAction) => {
    return (
        <TouchableOpacity onPress={onClick} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name={name} size={size} color={color} />
            <Text medium>{text}</Text>
        </TouchableOpacity>
    );
};