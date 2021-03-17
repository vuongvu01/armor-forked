import styled from 'styled-components';

import { SideSheetHeaderPropsType } from './type';
import { colorGrey50 } from '../../../tokens';
import { getPropsBlocker, makePropList } from '../../../utils';
import { spacing } from '../../../system/mixins';
import { Typography } from '../../Typography';

const propertyList = makePropList(['isFixed']);

const headerStyle = ({ theme }: SideSheetHeaderPropsType) => {
    const SideSheet = theme?.componentOverrides?.SideSheet;
    return SideSheet ? SideSheet.Header.base : {};
};

export const SideSheetHeader = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SideSheetHeaderPropsType>`
    flex-grow: 1;

    ${headerStyle}
`;

export const SideSheetHeaderTypography = styled(Typography).withConfig(
    getPropsBlocker(propertyList),
)<SideSheetHeaderPropsType>`
    margin-top: 0;
    margin-bottom: ${spacing(2)};
    font-size: 1.5em;
`;

export const descriptionTypographyStyle = {
    color: colorGrey50,
    marginBottom: 0,
    marginTop: 0,
};
