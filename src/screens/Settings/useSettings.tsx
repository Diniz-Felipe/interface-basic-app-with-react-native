import React from 'react';
import { Text } from '@/src/components/Text';
import { ListItem } from '@/src/components/ListItem';
import { ISectionsData } from '@/src/components/SectionList';

const DATA: ISectionsData[] = [
    {
      title: 'Theme',
      data: ["'Pizza', 'Burger', 'Risotto'"],
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

const RenderSectionHeader = ({ title }: ISectionsData) => <Text medium>{"title"}</Text>

const RenderNotificationsItem = () => (
  <ListItem.Root action={() => console.log("test noti...")}>
    <ListItem.Content text={"Theme"} />
  </ListItem.Root>
);

export const useSettings = () => {
  return {RenderNotificationsItem, RenderSectionHeader, DATA}
}