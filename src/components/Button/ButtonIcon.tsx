import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface IIcon {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
};

export const ButtonIcon = ({ name, color = '#555', size = 24 }: IIcon) => {
  return <Ionicons name={name} size={size} color={color} />
};