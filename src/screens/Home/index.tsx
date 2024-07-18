import React from 'react';
import { Text } from '@/src/components/Text';
import { Card } from '@/src/components/Card';

import { ListItem } from '@/src/components/ListItem';
import { List } from '@/src/components/List';

import { Wrapper, Container } from '@/src/screens/Home/styled';
import { RenderItemHome } from '@/src/screens/Home/RenderItemHome';
import { DATA } from '@/src/screens/Home/useHome';
import { useAuth } from '@/src/context/auth';

export const HomeScreen = () => {
  const { data } = useAuth();
  return (
    <Wrapper>
      <Text>{data?.name}</Text>
      <Container>
        <Card.Root>
          <Card.Icon color='#444' size={30} name="finger-print-outline" />
          <Card.Content text='test' />
          <Card.Content text='Hyper OS' />
        </Card.Root>

        <Card.Root>
          <Card.Icon color='#444' size={30} name="calendar-outline" />
          <Card.Content text='@Felipe ooooh' />
          <Card.Content text='@Felipe, @test' />
        </Card.Root>
      </Container>

      <ListItem.Root>
        <ListItem.Icon size={35} name="contrast-outline" color='#4444' />
        <ListItem.ItemContainer>
          <ListItem.Content text="conected device" />
          <ListItem.Content text="quick share" />
        </ListItem.ItemContainer>
      </ListItem.Root>

      <List
        data={DATA}
        renderItem={RenderItemHome}
      />

    </Wrapper>
  );
};