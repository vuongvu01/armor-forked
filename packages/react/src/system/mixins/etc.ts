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

// todo: maybe also reset colors to body.color and body.backgroundColor here
export const reset = () => css`
    box-sizing: border-box;
    text-align: left;
    margin: 0;
    padding: 0;

    word-break: normal;
    overflow-wrap: normal;
    white-space: normal;
`;

export const buttonReset = () => css`
    appearance: none;
    border: 0 none;
    background-color: transparent;
    border-radius: 0;
    display: block;
    padding: 0;
`;

export const zIndex = ({ zIndex: zIndexValue }: { zIndex?: number }) =>
    zIndex !== undefined
        ? css`
              z-index: ${zIndexValue};
          `
        : 0;
