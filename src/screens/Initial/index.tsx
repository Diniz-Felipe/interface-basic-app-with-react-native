import React from 'react';
import { Text } from '@/src/components/Text';
import { Container, ImageBackground } from '../Initial/styled';

const IMAGE = ""; //{ uri: "https://reactnative.dev/img/tiny_logo.png" };

export const InitialScreen = () => {
  return (
    <Container>
      <ImageBackground
        // source={IMAGE}
        resizeMode='cover'
        blurRadius={1.0}
        >

        <Text>Initial</Text>
        </ImageBackground>
      {/* </ImageBackground> */}

    </Container>
  )
};