import React from "react";
import { Text } from "../Text";

interface SheetTextProps {
    text?: string
};

export const SheetText = ({ text }: SheetTextProps) => {
    return (
        <Text medium>
            {text}
        </Text>
    );
};