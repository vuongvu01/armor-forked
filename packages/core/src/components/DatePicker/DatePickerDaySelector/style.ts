import styled, { css } from 'styled-components';
import {
    borderRadius,
    color,
    propsBlocker,
    reset,
    spacing,
    typography,
    getComponentOverride,
    transition,
    fontWeightMedium,
} from '@deliveryhero/armor-system';

import {
    DatePickerDaySelectorRootPropsType,
    DatePickerDaySelectorDayButtonPropsType,
    DatePickerDaySelectorDayPaddingPropsType,
    DatePickerDaySelectorDayPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const DatePickerDaySelectorRoot = styled.div.withConfig(
    propsBlocker,
)<DatePickerDaySelectorRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: ${spacing(4)};
    ${getComponentOverride('DatePickerDaySelector')};
`;

export const DatePickerDaySelectorWeek = styled.div.withConfig(propsBlocker)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    row-gap: ${spacing(1)};
    place-content: center;
    margin: 0 ${spacing(-0.5)};
`;

export const DatePickerDaySelectorWeekDay = styled.div.withConfig(propsBlocker)`
    width: ${spacing(10)};
    height: ${spacing(10)};
    color: ${color('neutral.11')};
    ${typography('paragraphSmall')};
    font-weight: ${fontWeightMedium};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${spacing(0.5)};
    user-select: none;
`;

export const DatePickerDaySelectorDays = styled.div.withConfig(propsBlocker)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    row-gap: ${spacing(1)};
    place-content: center;
    margin: 0 ${spacing(-0.5)};
`;

export const DatePickerDaySelectorDay = styled.div.withConfig(
    propsBlocker,
)<DatePickerDaySelectorDayPropsType>`
    display: flex;
`;

const getDayButtonStyle = ({
    selected,
    allowed,
    free,
    leftEnd,
    rightEnd,
    displayedMonth,
}: DatePickerDaySelectorDayButtonPropsType) => {
    let result = {};

    if (displayedMonth) {
        if (allowed && free) {
            result = css`
                ${result};
                cursor: pointer;
                &:hover {
                    color: ${color('neutral.11')};
                    background-color: ${color('primary.02')};
                }
            `;
        } else {
            result = css`
                ${result};
                color: ${color('neutral.07')};
                cursor: not-allowed;
            `;

            if (!free) {
                result = css`
                    ${result};
                    text-decoration: line-through;
                `;
            }
        }

        if (selected) {
            result = css`
                ${result};
                color: ${color('neutral.00')};
                background-color: ${color('primary.main')};
                &:hover {
                    color: ${color('neutral.11')};
                    background-color: ${color('primary.02')};
                }
            `;

            // make corners sharp if the element is a tail, head or in the middle
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
            if (!rightEnd && !leftEnd) {
                result = css`
                    ${result};
                    border-radius: 0;
                `;
            }

            // change the background if the element is in the middle
            if (!rightEnd && !leftEnd) {
                result = css`
                    ${result};
                    color: ${color('neutral.11')};
                    background-color: ${color('primary.lightest')};
                `;
            }
        }
    } else {
        result = css`
            ${result};
            visibility: hidden;
            pointer-events: none;
        `;
    }

    return result;
};

export const DatePickerDaySelectorDayButton = styled.a.withConfig(
    propsBlocker,
)<DatePickerDaySelectorDayButtonPropsType>`
    width: ${spacing(10)};
    height: ${spacing(10)};
    color: ${color('neutral.11')};
    ${typography('paragraphSmall')};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    ${transition({
        'background-color': 0.1,
        color: 0.1,
    })};
    border-radius: ${borderRadius('soft')};
    user-select: none;
    text-decoration: none;
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
    propsBlocker,
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
