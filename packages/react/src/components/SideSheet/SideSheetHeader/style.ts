import styled from 'styled-components';

import { SideSheetHeaderPropsType } from './type';
import { colorGrey50 } from '../../../tokens';
import { getPropsBlocker } from '../../../utils';

const headerStyle = ({ theme }: SideSheetHeaderPropsType) => {
    const SideSheet = theme?.componentOverrides?.SideSheet;
    return SideSheet ? SideSheet.Header.base : {};
};

export const SideSheetHeader = styled.div.withConfig(getPropsBlocker())<
    SideSheetHeaderPropsType
>`
    flex-grow: 1;

    ${headerStyle}
`;

export const titleTypographyStyle = { marginTop: 0, marginBottom: '8px' };
export const descriptionTypographyStyle = {
    color: colorGrey50,
    marginBottom: 0,
    marginTop: 0,
};
