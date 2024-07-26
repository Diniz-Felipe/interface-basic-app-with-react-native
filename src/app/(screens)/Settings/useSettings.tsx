import React from 'react';
import { Text } from '@/src/components/Text';
import { ListItem } from '@/src/components/ListItem';
import { ISectionsData } from '@/src/components/SectionList';
import { useSheetBottom } from '@/src/components/Modal/SheetBottom';

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

export const useSettings = () => {

  const { handleOpenPress } = useSheetBottom();

  const RenderSettingsItem = (item: DataProps) => (
    <ListItem.Root action={handleOpenPress}>
      <ListItem.Content text={item} />
    </ListItem.Root>
  );
  
  return {RenderSettingsItem, RenderSectionHeader, DATA}
};
