import styled from 'styled-components';
import { fixedCover } from '../../system/mixins';

export const ModalRoot = styled.div<{ elevation: number }>`
    z-index ${({ elevation }) => elevation};
    position: relative;
`;

/** ModalBackdrop is used only to catch click aways, and does not have any styling */
export const ModalBackdrop = styled.div`
    ${fixedCover}
    z-index: inherit;
`;
