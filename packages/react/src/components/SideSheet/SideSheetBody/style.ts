import styled, { css } from 'styled-components';

import { SideSheetBodyPropsType } from './type';
import { Typography } from '../../Typography';
import { getPropsBlocker } from '../../../utils';

const propertyList = {
    isFixed: true,
};

const bodyStyle = ({ isFixed }: SideSheetBodyPropsType) => css`
    ${isFixed ? 'overflow-y: auto;' : ''}
`;

export const SideSheetBody = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<SideSheetBodyPropsType>`
    display: inline-block;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;

    ${bodyStyle};
`;
