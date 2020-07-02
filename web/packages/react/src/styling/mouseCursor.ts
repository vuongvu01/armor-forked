import { css } from 'styled-components';

type MouseCursorType = { disabled?: boolean };

const mouseCursor = ({ disabled }: MouseCursorType) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
`;

export default mouseCursor;
