import { css } from 'styled-components';

export type PointerEventsType = { disabled?: boolean };

export const pointerEvents = ({ disabled }: PointerEventsType) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
`;
