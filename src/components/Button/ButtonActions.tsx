import React, { ReactNode } from 'react';
import { Content } from '@/components/Button/styled';

interface IActions {
    children: ReactNode;
};

export const ButtonActions = ({ children }: IActions) => {
  return (
    <Content>
        {children}
    </Content>
  );
};