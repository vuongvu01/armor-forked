import flatten from 'flat';
import { Theme } from '@material-ui/core';
import { ObjectLiteralType } from '../type';

export const makeTokenIndex = (theme: Theme) => {
    const result: ObjectLiteralType = {};

    const { palette, typography } = theme;

    const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;
    paletteKeys.forEach(key => {
        result[`palette.${key}`] = palette[key];
    });

    const typographyKeys = Object.keys(typography) as Array<
        keyof typeof typography
    >;
    typographyKeys.forEach(key => {
        result[`typography.${key}`] = typography[key];
    });

    return flatten(result) as ObjectLiteralType;
};
