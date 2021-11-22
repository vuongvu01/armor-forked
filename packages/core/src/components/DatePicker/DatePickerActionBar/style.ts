import styled from 'styled-components';
import {
    pixelToRem,
    reset,
    spacing,
    typography,
    propsBlocker,
    getComponentOverride,
    fontSize02,
    fontSize03,
} from '@deliveryhero/armor-system';

import { DatePickerActionBarRootPropsType } from './type';
import { Button } from '../../Button';

/** 👉 ROOT ELEMENT */
export const DatePickerActionBarRoot = styled.div.withConfig(propsBlocker)<
    DatePickerActionBarRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: 0 ${spacing(4)} ${spacing(4)} ${spacing(4)};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${getComponentOverride('DatePickerActionBar')};
`;

export const DatePickerActionBarButton = styled(Button).attrs({
    tertiary: true,
})`
    // todo: use regular typography here
    font-size: ${pixelToRem(fontSize02)};
    line-height: ${pixelToRem(fontSize03)};
`;
