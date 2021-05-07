import styled, { css } from 'styled-components';
import {
    DatePickerTimeSelectorButtonPropsType,
    DatePickerTimeSelectorRootPropsType,
} from './type';
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
} from '../../../system';
import { TextInput } from '../../TextInput';
import { borderRadius02, fontSize03, fontWeightMedium } from '../../../tokens';

/** 👉 ROOT ELEMENT */
export const DatePickerTimeSelectorRoot = styled.div.withConfig(propsBlocker)<
    DatePickerTimeSelectorRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
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
    line-height: ${pixelToRem(fontSize03)};
    font-weight: ${fontWeightMedium};

    padding: ${spacing(3)} ${spacing(4)};
    border-radius: ${borderRadius(borderRadius02)};
    border: 1px solid transparent;
    color: ${color('primary.main')};
    background-color: inherit;
    cursor: pointer;
    ${transition({
        color: true,
        'background-color': true,
    })}

    ${getTimeSelectorButtonStyle};
`;
