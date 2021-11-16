import { css } from 'styled-components';
import { CSSChunkType } from '../type';

type MouseCursorType = { disabled?: boolean };

export const mouseCursor = ({ disabled }: MouseCursorType): CSSChunkType => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
`;
