import styled from 'styled-components';

import { SideSheetHeaderRootPropsType } from './type';
import {
    colorGrey50,
    componentSpacing04,
    componentSpacing08,
} from '../../../tokens';
import { getComponentOverride, propsBlocker, spacing } from '../../../system';
import { Typography } from '../../Typography';

/** 👉 ROOT ELEMENT */
export const SideSheetHeaderRoot = styled.div.withConfig(propsBlocker)<
    SideSheetHeaderRootPropsType
>`
    flex-grow: 1;
    padding-bottom: ${spacing(componentSpacing08)};
    padding-right: ${spacing(componentSpacing04)};
    ${getComponentOverride('SideSheetHeader')};
`;

export const SideSheetHeaderTypography = styled(Typography)`
    margin-top: 0;
    margin-bottom: ${spacing(2)};
    font-size: 1.5em;
`;

export const descriptionTypographyStyle = {
    color: colorGrey50,
    marginBottom: 0,
    marginTop: 0,
};
