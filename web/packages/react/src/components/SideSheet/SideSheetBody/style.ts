import styled, { css } from 'styled-components';

import { SideSheetBodyPropsType } from './type';

const bodyStyle = ({ isFixed }: SideSheetBodyPropsType) => css`
    ${isFixed ? 'overflow-y: auto;' : ''}
`;

export const SideSheetBody = styled.div<SideSheetBodyPropsType>`
    display: inline-block;
    flex-grow: 1;
    flex-wrap: wrap;

    ${bodyStyle}
`;
