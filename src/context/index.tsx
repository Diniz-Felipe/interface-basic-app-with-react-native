import React from "react";
import { InitialSplashScreen } from "../screens/Initial-Splash";
import { useState } from "react";
import { Routes } from "../routes";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export const AppProvider = () => {
    const [splashComplete, setSplashComplete] = useState(false);

    return (
        splashComplete 
        ?  <Routes />

        :  <InitialSplashScreen onComplete={setSplashComplete} />
    );
};