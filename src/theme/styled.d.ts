import "styled-components";
import { theme } from './index';

declare module 'styled-components' {
    export interface DefaultTheme {
        theme
    }
}