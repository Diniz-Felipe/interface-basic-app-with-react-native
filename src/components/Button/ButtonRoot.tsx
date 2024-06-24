import React, { ReactNode } from 'react';
import { Content } from '@/src/components/Button/styled';

interface IRoot {
    children: ReactNode;
};

export const ButtonRoot = ({ children }: IRoot) => {
  return (
    <Content>
        {children}
    </Content>
  );
};