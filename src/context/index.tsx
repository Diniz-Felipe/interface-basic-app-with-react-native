import React from "react";
import { Routes } from "../routes";
import { ThemeProvider } from "styled-components/native";

import { theme } from "../theme";
import { AuthProvider } from "./auth";

export const AppProvider = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
};