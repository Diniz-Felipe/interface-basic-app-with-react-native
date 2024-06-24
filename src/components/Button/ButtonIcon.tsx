import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface IIcon {
  name: any;
  size: number;
  color: string;
};

export const ButtonIcon = ({ name, color, size }: IIcon) => {
  return <Ionicons name={name} size={size} color={color} />
};