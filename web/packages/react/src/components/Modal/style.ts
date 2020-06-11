import styled from 'styled-components';
import { fixedCover } from '../../system/mixins';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    elevation: true,
    // add other custom properties here
} as ObjectLiteralType;

export const ModalRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<{ elevation: number }>`
    z-index ${({ elevation }) => elevation};
    position: relative;
`;

/** ModalBackdrop is used only to catch click aways, and does not have any styling */
export const ModalBackdrop = styled.div`
    ${fixedCover}
    z-index: inherit;
`;
