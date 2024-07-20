import { ThemeProvider } from "styled-components"
import theme from ".";

interface ThemeType {
    children: React.ReactNode;
}

export const Theme = ({ children }: ThemeType) => {
    return <ThemeProvider theme={theme.darkTheme}>
        {children}
    </ThemeProvider>
}