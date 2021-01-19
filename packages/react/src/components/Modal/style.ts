import styled from 'styled-components';
import { fixedCover } from '../../system/mixins';
import { getPropsBlocker } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    zIndex: true,
    // add other custom properties here
} as ObjectLiteralType;

export const ModalRoot = styled.div.withConfig(getPropsBlocker(propertyList))<{
    zIndex: number;
}>`
    z-index ${({ zIndex }) => zIndex};
    position: relative;
`;

/** ModalBackdrop is used only to catch click aways, and does not have any styling */
export const ModalBackdrop = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    ${fixedCover};
    z-index: inherit;
`;
