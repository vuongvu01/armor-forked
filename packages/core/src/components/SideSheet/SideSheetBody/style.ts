import styled, { css } from 'styled-components';
import {
    marginProps,
    paddingProps,
    typography,
    componentSpacing06,
    spacing,
} from '@deliveryhero/armor-system';

import { SideSheetBodyRootPropsType } from './type';

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
    padding: 0 ${spacing(componentSpacing06)};

    ${rootStyle};
    ${marginProps};
    ${paddingProps};
`;
