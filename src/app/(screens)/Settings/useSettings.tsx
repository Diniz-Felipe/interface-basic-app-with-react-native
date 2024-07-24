import React from 'react';
import { Text } from '@/src/components/Text';
import { ListItem } from '@/src/components/ListItem';
import { ISectionsData } from '@/src/components/SectionList';

export interface DataProps extends ISectionsData {};

const DATA: DataProps[] = [
  {
    title: 'Geral',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Conexões',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Themas',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Outros',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const RenderSectionHeader = (section: DataProps) => <Text medium>{section.title}</Text>

const handleNextSettings = () => {};

const RenderSettingsItem = (item: DataProps) => (
  <ListItem.Root action={handleNextSettings}>
    <ListItem.Content text={item} />
  </ListItem.Root>
);

export const useSettings = () => {
  return {RenderSettingsItem, RenderSectionHeader, DATA}
};
