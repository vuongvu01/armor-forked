import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { CSSChunkType } from '../type';

export const noTextInteraction = (): CSSChunkType => css`
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
export const reset = (): CSSChunkType => css`
    box-sizing: border-box;
    text-align: left;
    margin: 0;
    padding: 0;

    word-break: normal;
    overflow-wrap: normal;
    white-space: normal;
`;

export const buttonReset = (): CSSChunkType => css`
    appearance: none;
    border: 0 none;
    background-color: transparent;
    border-radius: 0;
    display: block;
    padding: 0;
`;

export const zIndex = ({
    zIndex: zIndexValue,
}: {
    zIndex?: number;
}): CSSChunkType =>
    zIndex !== undefined
        ? css`
              z-index: ${zIndexValue};
          `
        : '';

export const notLastChild = (): CSSChunkType => ':not(:last-child)';

export const childrenNotLastChild = (): CSSChunkType => `> *${notLastChild()}`;

export const round = (): CSSChunkType => 'border-radius: 9999px;';

export const textDecorationNone = (): CSSChunkType => css`
    text-decoration: none;
    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
    }
`;

type ColorArgumentType = string | ((arg: any) => string);

export const enforceColor = (
    color: ColorArgumentType,
): FlattenInterpolation<ThemeProps<any>> => css`
    color: ${color};
    &:hover,
    &:visited,
    &:active,
    &:focus {
        color: ${color};
    }
`;
