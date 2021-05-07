import { css } from 'styled-components';

export type PointerEventsType = { disabled?: boolean };

const pointerEvents = ({ disabled }: PointerEventsType) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
`;

export default pointerEvents;
