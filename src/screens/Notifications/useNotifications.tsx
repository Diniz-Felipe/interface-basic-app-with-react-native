import React from 'react';
import { ISectionsData } from '@/components/SectionList';
import { ListItem } from '@/components/ListItem';
import { Text } from '@/components/Text';

const DATA: ISectionsData[] = [
  {
    title: 'Hoje',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Ontem',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: '5 Dias.',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: '30 Dias',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const RenderSectionHeader = ({ title }: ISectionsData) => <Text medium>{title}</Text>

const RenderNotificationsItem = () => (
  <ListItem.Root action={() => console.log("test noti...")}>
    <ListItem.Content text="text1" />
  </ListItem.Root>
);

export const useNotifications = () => {
  return { RenderNotificationsItem, DATA, RenderSectionHeader };
};
