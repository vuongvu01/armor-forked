import { css } from 'styled-components';
import { ScalarType } from '../../type';
import { ThemeType } from '../../styling';

export type WideAttributesType = {
    wide?: boolean;
    maxWidth?: ScalarType;
};

export const wideAttributes = ({
    wide,
    maxWidth,
    theme,
}: WideAttributesType & { theme: ThemeType }) => css`
    ${maxWidth
        ? css`
              max-width: ${Math.max(theme.breakpoints.values[maxWidth], 400)}px;
          `
        : ''}
    ${wide ? 'width: 100%;' : ''}
`;
