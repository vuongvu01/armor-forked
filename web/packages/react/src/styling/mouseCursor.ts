import { css } from 'styled-components';

type MouseCursorType = { disabled?: boolean };

const mouseCursor = ({ disabled }: MouseCursorType) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
`;

export default mouseCursor;
