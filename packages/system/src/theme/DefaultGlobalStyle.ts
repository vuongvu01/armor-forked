import { createGlobalStyle, css } from 'styled-components';
import { RootThemeType } from './type';

export const DefaultGlobalStyle = createGlobalStyle<{ theme: RootThemeType }>(
    ({ theme: { armor } }) => css`
        body {
            background-color: ${armor.body.backgroundColor};
            color: ${armor.body.color};
        }
    `,
);
