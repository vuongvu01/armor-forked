import styled, { css } from 'styled-components';

import { SideSheetBodyPropsType } from './type';
import { Typography } from '../../Typography';

const bodyStyle = ({ isFixed }: SideSheetBodyPropsType) => css`
    ${isFixed ? 'overflow-y: auto;' : ''}
`;

export const SideSheetBody = styled(Typography)<SideSheetBodyPropsType>`
    display: inline-block;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;

    ${bodyStyle};
`;
