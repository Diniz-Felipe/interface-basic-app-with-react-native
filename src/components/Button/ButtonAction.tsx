import React, { ReactNode } from 'react';
import { Touchable } from '@/src/components/Button/styled';

interface IAction {
  onPress: () => void;
  children: ReactNode;
};

export const ButtonAction = ({ onPress, children }: IAction) => {
  return (
    <Touchable onPress={onPress}>
      {children}
    </Touchable>
  );
};