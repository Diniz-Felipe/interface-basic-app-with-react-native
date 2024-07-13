import React from "react";
import { Routes } from "../routes";
import { ThemeProvider } from "styled-components/native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from "../theme";

const queryClient = new QueryClient();

export const AppProvider = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </QueryClientProvider>
    );
};