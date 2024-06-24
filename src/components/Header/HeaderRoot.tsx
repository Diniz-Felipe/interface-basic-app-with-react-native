import React, { ReactNode } from "react";
import {Container} from '@/components/Header/styled';

interface IRoot {
    children: ReactNode;
};

export const HeaderRoot = ({ children }: IRoot) => {
  return (
    <Container>{children}</Container>
  );
};