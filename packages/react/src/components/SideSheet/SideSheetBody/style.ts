import styled, { css } from 'styled-components';

import { SideSheetBodyRootPropsType } from './type';
import { Typography } from '../../Typography';

const rootStyle = ({ isFixed }: SideSheetBodyRootPropsType) => css`
    ${isFixed ? 'overflow-y: auto;' : ''}
`;

/** 👉 ROOT ELEMENT */
export const SideSheetBodyRoot = styled(Typography)<SideSheetBodyRootPropsType>`
    display: inline-block;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;

    ${rootStyle};
`;
