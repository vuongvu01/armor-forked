import styled from 'styled-components';
import {
    reset,
    spacing,
    typography,
    propsBlocker,
    getComponentOverride,
    color,
    notLastChild,
    token,
} from '@deliveryhero/armor-system';

import { DatePickerActionBarRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const DatePickerActionBarRoot = styled.div.withConfig(
    propsBlocker,
)<DatePickerActionBarRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    padding: ${spacing(4)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${color('neutral.02')};
    border-top: 1px solid ${color('neutral.03')};

    ${getComponentOverride('DatePickerActionBar')};
`;

export const DatePickerActionBarActions = styled.div`
    padding-right: ${spacing(2)};
    > ${notLastChild} {
        margin-right: ${spacing(2)};
    }
`;
