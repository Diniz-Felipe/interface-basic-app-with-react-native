import React from 'react';
import { ISectionsData } from '@/src/components/SectionList';
import { ListItem } from '@/src/components/ListItem';
import { Text } from '@/src/components/Text';
import { ActivityIndicator } from 'react-native-paper';

export interface DataProps extends ISectionsData {}

const DATA: DataProps[] = [
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

const RenderSectionHeader = (section: DataProps) =>  <Text medium>{section.title}</Text>

const handleNextNotifications = () => {};

const RenderNotificationsItem = (item: DataProps) => (
  <ListItem.Root action={handleNextNotifications}>
    <ListItem.Content text={item} />
  </ListItem.Root>
);

const Loading = () => <ActivityIndicator color='red' size='large' />

export const useNotifications = () => {
  return { RenderNotificationsItem, DATA, RenderSectionHeader, Loading };
};
