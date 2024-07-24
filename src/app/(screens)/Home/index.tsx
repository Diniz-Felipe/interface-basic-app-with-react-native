import React from 'react';
import { Text } from '@/src/components/Text';
import { Card } from '@/src/components/Card';

import { ListItem } from '@/src/components/ListItem';
import { List } from '@/src/components/List';

import { Wrapper, Container } from '@/src/app/(screens)/Home/styled';
import { RenderItemHome } from '@/src/app/(screens)/Home/RenderItemHome';
import { DATA } from '@/src/app/(screens)/Home/useHome';
import { useAuth } from '@/src/context/auth';
import { View } from 'react-native';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const HomeScreen = () => {
  const { data } = useAuth();
  const { user } = useUser();
  return (
    <Wrapper>
      {/* Logged */}
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
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
      </SignedIn>

      {/* not logged in */}
      <SignedOut>
        <Link href="(auth)/Login">
          <Text>Sign In</Text>
        </Link>
        <Link href="(auth)/Register">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </Wrapper>
  );
};

export default HomeScreen;