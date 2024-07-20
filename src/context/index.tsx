import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes } from "../routes";
import {Theme} from "../theme/theme";

const queryClient = new QueryClient();

export const AppProvider = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleTheme = () => setIsDarkMode(!isDarkMode)

    return (
        <QueryClientProvider client={queryClient}>
            <Theme>
                <Routes />
            </Theme>
        </QueryClientProvider>
    );
};