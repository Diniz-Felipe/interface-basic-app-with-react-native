import React from 'react';
import { Container, Switch } from "@/src/components/ListItem/styled";

interface ListItemCheckProps {
    text?: string;
};

export const ListItemCheck = ({ text }: ListItemCheckProps) => (
    <Container>
        <Switch
        // value={}
        // onValueChange={}
        />
    </Container>
);
