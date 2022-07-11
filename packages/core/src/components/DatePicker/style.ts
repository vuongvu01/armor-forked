import styled, { css } from 'styled-components';
import { CalendarIcon } from '@deliveryhero/armor-icons';
import {
    borderRadius,
    color,
    spacing,
    typography,
    zIndex,
    propsBlocker,
    getComponentOverride,
    focusWithin,
} from '@deliveryhero/armor-system';

import { DatePickerArrowPropsType, DatePickerDropdownPropsType } from './type';

import { TextInput } from '../TextInput';

export const getRootStyle = ({
    enableTimePicker,
    enableMinWidthAutoCorrection,
}: {
    enableTimePicker?: boolean;
    enableMinWidthAutoCorrection?: boolean;
}) => {
    let result = {};

    if (enableMinWidthAutoCorrection !== false) {
        result = css`
            min-width: ${spacing(enableTimePicker ? 88 : 58)};
        `;
    }

    return result;
};

export const DatePickerInput = styled(TextInput)`
    ${({ disabled, error }) =>
        focusWithin({ disabled, error, noOutline: true })};
    width: 100%;
`;

export const DatePickerInputIcon = styled(CalendarIcon).attrs({ small: true })`
    margin-right: ${spacing(2)};

    // todo: fix this
    && {
        color: ${color('primary.main')};
    }
`;

export const DatePickerDropdown = styled.div.withConfig(
    propsBlocker,
)<DatePickerDropdownPropsType>`
    ${typography('paragraphMedium')};
    color: ${color('neutral.07')};
    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};
    min-width: ${spacing(84)};
    ${zIndex};
    ${getComponentOverride('DatePickerDropdown')};
    overflow: hidden;

    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
`;

// we have to keep the arrow, even though it is not in the design
// if we don't have it, the popper library screws everything up
export const DatePickerDropdownArrow = styled.div.withConfig(
    propsBlocker,
)<DatePickerArrowPropsType>`
    height: 0;
    width: 0;
    visibility: hidden;
`;
