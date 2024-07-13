import React from 'react';
import { ListItem } from '@/src/components/ListItem';

export const RenderItemHome = () => {
  return <ListItem.Root>
    <ListItem.Icon size={35} name="barcode-outline" color='#444' />
    <ListItem.Content text="List aqui" />
    <ListItem.Content text="List aqui" />
  </ListItem.Root>
};
