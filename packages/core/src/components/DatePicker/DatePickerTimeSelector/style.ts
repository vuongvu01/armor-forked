import styled, { css } from 'styled-components';
import {
    borderRadius,
    color,
    pixelToRem,
    reset,
    spacing,
    typography,
    transition,
    getComponentOverride,
    propsBlocker,
    borderRadius02,
    fontSize03,
    fontWeightMedium,
    token,
} from '@deliveryhero/armor-system';

import {
    DatePickerTimeSelectorButtonPropsType,
    DatePickerTimeSelectorRootPropsType,
} from './type';
import { TextInput } from '../../TextInput';

/** 👉 ROOT ELEMENT */
export const DatePickerTimeSelectorRoot = styled.div.withConfig(
    propsBlocker,
)<DatePickerTimeSelectorRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    padding: ${spacing(4)};
    border-top: 1px solid ${color('neutral.03')};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${getComponentOverride('DatePickerTimeSelector')};
`;

export const DatePickerTimeSelectorClock = styled.div.withConfig(propsBlocker)`
    display: flex;
    align-items: center;
`;

export const DatePickerTimeSelectorInput = styled(TextInput)`
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    background-color: inherit;
    width: ${spacing(13)};
    .TextInput-Input {
        text-align: right;
    }
`;

export const DatePickerTimeSelectorDayPeriodSelector = styled.div.withConfig(
    propsBlocker,
)``;

const getTimeSelectorButtonStyle = ({
    selected,
}: DatePickerTimeSelectorButtonPropsType) => {
    let result = {};

    if (selected) {
        result = css`
            ${result};
            color: ${color('neutral.00')};
            background-color: ${color('primary.main')};
            border: 1px solid ${color('primary.main')};
            &:hover {
                background-color: ${color('primary.light')};
            }
        `;
    } else {
        result = css`
            ${result};
            &:hover {
                color: ${color('primary.light')};
            }
        `;
    }

    return result;
};

export const DatePickerTimeSelectorButton = styled.button.withConfig(
    propsBlocker,
)<DatePickerTimeSelectorButtonPropsType>`
    // todo: use regular typography here
    ${typography('paragraphMedium')};
    color: ${color('primary.main')};
    line-height: ${pixelToRem(fontSize03)};
    font-weight: ${fontWeightMedium};

    padding: ${spacing(3, 4)};
    border-radius: ${borderRadius(borderRadius02)};
    border: 1px solid transparent;
    background-color: inherit;
    cursor: pointer;
    ${transition({
        color: true,
        'background-color': true,
    })}

    ${getTimeSelectorButtonStyle};
`;
