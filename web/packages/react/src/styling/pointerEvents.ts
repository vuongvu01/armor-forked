import { css } from 'styled-components';

type PointerEventsType = { disabled?: boolean };

const pointerEvents = ({ disabled }: PointerEventsType) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
`;

export default pointerEvents;
