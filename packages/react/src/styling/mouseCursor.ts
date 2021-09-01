import { css } from 'styled-components';

type MouseCursorType = { disabled?: boolean };

export const mouseCursor = ({ disabled }: MouseCursorType) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
`;
