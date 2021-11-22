import { css } from 'styled-components';
import { CSSChunkType } from '../type';

export type PointerEventsPropsType = { disabled?: boolean };

export const pointerEvents = ({
    disabled,
}: PointerEventsPropsType): CSSChunkType => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
`;
