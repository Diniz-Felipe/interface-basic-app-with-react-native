import React, { useState } from 'react';
import { AppProvider } from './context';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { InitialSplashScreen } from './screens/Initial-Splash';

preventAutoHideAsync();

export const Layout = () => {
    const [splashComplete, setSplashComplete] = useState(false);
    return (
        splashComplete
            ? <AppProvider />

            : <InitialSplashScreen onComplete={setSplashComplete} />
    )
}