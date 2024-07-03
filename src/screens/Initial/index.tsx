import React from 'react';
import { Text } from '@/src/components/Text';
import { Container, ImageBackground } from '../Initial/styled';

const IMAGE = "";

export const InitialScreen = () => {
  return (
    <Container>
      
      <ImageBackground
        // source={IMAGE}
        resizeMode='cover'
        blurRadius={1.0}
        >
        <Text>Start now</Text>
        </ImageBackground>
      {/* </ImageBackground> */}

    </Container>
  )
};