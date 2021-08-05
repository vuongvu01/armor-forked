import styled, { css } from 'styled-components';

import { SideSheetBodyRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    typography,
} from '../../../system';

const rootStyle = ({ isFixed }: SideSheetBodyRootPropsType) => css`
    ${isFixed ? 'overflow-y: auto;' : ''}
`;

/** 👉 ROOT ELEMENT */
export const SideSheetBodyRoot = styled.div<SideSheetBodyRootPropsType>`
    ${typography('paragraphMedium')};
    display: inline-block;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;

    ${rootStyle};
    ${marginAttributes};
    ${paddingAttributes};
`;
