import styled from 'styled-components';
import {
    componentSpacing04,
    componentSpacing08,
    color,
    getComponentOverride,
    propsBlocker,
    reset,
    spacing,
    typography,
} from '@deliveryhero/armor-system';

import {
    SideSheetHeaderDescriptionPropsType,
    SideSheetHeaderRootPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const SideSheetHeaderRoot = styled.div.withConfig(
    propsBlocker,
)<SideSheetHeaderRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    flex-grow: 1;
    padding-bottom: ${spacing(componentSpacing08)};
    padding-right: ${spacing(componentSpacing04)};
    ${getComponentOverride('SideSheetHeader')};
`;

export const SideSheetHeaderTitle = styled.div`
    ${typography('sectionTitle')};
    margin-top: 0;
    margin-bottom: ${spacing(2)};
`;

export const SideSheetHeaderDescription = styled.div.withConfig(
    propsBlocker,
)<SideSheetHeaderDescriptionPropsType>`
    ${typography('paragraphLarge')};
    color: ${color('neutral.07')};
    margin-bottom: 0;
    margin-top: 0;
`;
