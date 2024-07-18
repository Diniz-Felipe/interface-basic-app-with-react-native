import React from 'react';
import { Text } from '../Text';

interface IContent {
  text: string | any;
};

export const Content = ({ text }: IContent) => {
  return <Text medium>{text}</Text>
};