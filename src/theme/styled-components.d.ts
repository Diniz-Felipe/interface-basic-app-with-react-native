import "styled-components";
import theme from './index';

export type Theme = typeof theme.darkTheme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}