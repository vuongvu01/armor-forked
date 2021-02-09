import styled, { css } from 'styled-components';
import {
    DatePickerDaySelectorRootPropsType,
    DatePickerDaySelectorDayButtonPropsType,
    DatePickerDaySelectorDayPaddingPropsType,
} from './type';
import { getPropsBlocker } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import {
    borderRadius,
    color,
    reset,
    spacing,
    typography,
} from '../../../system';
import { transition } from '../../../system/mixins/transition';
import { fontWeightMedium } from '../../../tokens';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    current: true,
    selected: true,
    leftEnd: true,
    rightEnd: true,
    left: true,
    right: true,
    weekDay: true,
    displayedMonth: true,
    month: true,
    year: true,
    day: true,
    applyValue: true,
    onDisplayedDateUTCUpdate: true,
    onDirtyInternalValueUTCUpdate: true,
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const DatePickerDaySelectorRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerDaySelectorRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: ${spacing(4)};
    //min-height: ${spacing(84)};

    ${getComponentOverride('DatePickerDaySelector')};
`;

export const DatePickerDaySelectorWeek = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    row-gap: ${spacing(1)};
    place-content: center;
    margin: 0 ${spacing(-0.5)};
`;

export const DatePickerDaySelectorWeekDay = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    width: ${spacing(10)};
    height: ${spacing(10)};
    color: ${color('neutral.06')};
    ${typography('paragraphSmall')};
    font-weight: ${fontWeightMedium};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${spacing(0.5)};
    user-select: none;
`;

export const DatePickerDaySelectorDays = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    row-gap: ${spacing(1)};
    place-content: center;
    margin: 0 ${spacing(-0.5)};
`;

export const DatePickerDaySelectorDay = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    display: flex;
`;

const getDayButtonStyle = ({
    selected,
    leftEnd,
    rightEnd,
    displayedMonth,
}: DatePickerDaySelectorDayButtonPropsType) => {
    let result = {};

    if (displayedMonth && selected) {
        // make corners sharp if the element is just a tail (or a head)
        if (leftEnd && !rightEnd) {
            result = css`
                ${result};
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
            `;
        }

        if (rightEnd && !leftEnd) {
            result = css`
                ${result};
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            `;
        }

        // set background
        if (!rightEnd && !leftEnd) {
            result = css`
                ${result};
                background-color: ${color('primary.lightest')};
                border-radius: 0;
            `;
        }

        if (rightEnd || leftEnd) {
            result = css`
                ${result};
                color: ${color('neutral.00')};
                background-color: ${color('primary.main')};

                &:hover {
                    background-color: ${color('primary.light')};
                }
            `;
        }
    }

    if (!displayedMonth) {
        result = css`
            ${result};
            visibility: hidden;
        `;
    }

    return result;
};

export const DatePickerDaySelectorDayButton = styled.a.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerDaySelectorDayButtonPropsType>`
    width: ${spacing(10)};
    height: ${spacing(10)};
    color: ${color('neutral.06')};
    ${typography('paragraphSmall')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    ${transition({
        'background-color': 0.1,
        color: 0.1,
    })};
    &:hover {
        color: ${color('neutral.00')};
        background-color: ${color('primary.main')};
    }
    border-radius: ${borderRadius('soft')};
    user-select: none;
    ${getDayButtonStyle};
`;

const getDayPaddingStyle = ({
    selected,
    leftEnd,
    rightEnd,
    left,
    right,
    displayedMonth,
}: DatePickerDaySelectorDayPaddingPropsType) => {
    let result = {};

    if (displayedMonth && selected) {
        result = css`
            ${result};
            background-color: ${color('primary.lightest')};
        `;

        if ((right && rightEnd) || (left && leftEnd)) {
            result = css`
                ${result};
                background-color: transparent;
            `;
        }
    }

    return result;
};

export const DatePickerDaySelectorDayPadding = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerDaySelectorDayPaddingPropsType>`
    width: ${spacing(0.5)};
    height: ${spacing(10)};
    flex-shrink: 0;
    ${transition({
        'background-color': 0.1,
        color: 0.1,
    })};
    ${getDayPaddingStyle}
`;
