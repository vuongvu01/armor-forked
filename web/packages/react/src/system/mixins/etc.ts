import { css } from 'styled-components';

export const noTextInteraction = () => css`
    text-decoration: none;
    &:hover,
    &:focus,
    &:active,
    &:visited {
        text-decoration: none;
    }
    outline: none;
    user-select: none;
`;
