import React, { ReactNode } from 'react';
import * as S from './styled';

interface IListRoot {
    children: ReactNode;
    action?: () => void;
};

export const ListItemRoot = ({ children, action }: IListRoot) => (
    <S.ListItem onPress={action}>{children}</S.ListItem>
);
