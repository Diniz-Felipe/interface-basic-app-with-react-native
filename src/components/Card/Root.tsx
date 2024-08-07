import React from 'react';
import {Container} from "./styled";

interface IRoot {
    children: React.ReactNode;
};

export const Root = ({ children }: IRoot) => {
  return <Container>
    {children}
  </Container>
};