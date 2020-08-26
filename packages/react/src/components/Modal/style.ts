import styled from 'styled-components';
import { fixedCover } from '../../system/mixins';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    zIndex: true,
    // add other custom properties here
} as ObjectLiteralType;

export const ModalRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<{ zIndex: number }>`
    z-index ${({ zIndex }) => zIndex};
    position: relative;
`;

/** ModalBackdrop is used only to catch click aways, and does not have any styling */
export const ModalBackdrop = styled.div`
    ${fixedCover}
    z-index: inherit;
`;