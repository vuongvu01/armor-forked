import { css } from 'styled-components';

type MouseCursorType = { disabled?: boolean };

const mouseCursor = ({ disabled }: MouseCursorType) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
`;

export default mouseCursor;
