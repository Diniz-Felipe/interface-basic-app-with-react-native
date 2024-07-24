import React, { useState } from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import InitialSplashScreen from '@/src/components/Initial-Splash';
import { AppProvider } from "@/src/context";

preventAutoHideAsync();

const InitialLayout = () => {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    splashComplete
      ? <AppProvider />

      : <InitialSplashScreen onComplete={setSplashComplete} />
  )
}

export default function RootLayout() {
  return (
    <InitialLayout />
  );
};
