import styled, { css } from 'styled-components';
import {
    DatePickerMonthYearSelectorRootPropsType,
    DatePickerMonthYearSelectorYearPropsType,
    DatePickerMonthYearSelectorListPropsType,
    DatePickerMonthYearSelectorYearTitlePropsType,
    DatePickerMonthYearSelectorMonthListPropsType,
    DatePickerMonthYearSelectorMonthPropsType,
    DatePickerMonthYearSelectorScrollPropsType,
} from './type';
import {
    borderRadius,
    buttonReset,
    color,
    pixelToRem,
    reset,
    spacing,
    typography,
    marginAttributes,
    propsBlocker,
    transition,
    getComponentOverride,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const DatePickerMonthYearSelectorRoot = styled.div.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: ${spacing(4)};

    ${getComponentOverride('DatePickerMonthYearSelector')};
    ${marginAttributes};
`;

export const DatePickerMonthYearSelectorScroll = styled.div.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorScrollPropsType>`
    ${reset()};
    overflow-y: auto;
    max-height: ${spacing(75)};
`;

export const DatePickerMonthYearSelectorList = styled.div.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorListPropsType>`
    ${reset()};
`;

export const DatePickerMonthYearSelectorYear = styled.div.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorYearPropsType>`
    ${reset()};
    &:not(:first-child) {
        border-top: 1px solid ${color('neutral.03')};
    }
`;

export const DatePickerMonthYearSelectorYearTitle = styled.button.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorYearTitlePropsType>`
    ${reset()};
    ${buttonReset()};
    outline: none; // todo: fix this
    width: 100%;
    padding: ${spacing(4)};
    line-height: ${pixelToRem(16)};
    cursor: pointer;
    display: block;

    background-color: ${color('neutral.02')};
    &:hover {
        background-color: ${color('neutral.01')};
    }
    ${transition({
        'background-color': 0.1,
    })};
`;

export const DatePickerMonthYearSelectorMonthList = styled.div.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorMonthListPropsType>`
    ${reset()};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: ${spacing(1)};
    place-content: center;
    //margin: 0 ${spacing(-0.5)};
    padding: ${spacing(1)} 0;
`;

const getMonthStyle = ({
    selected,
}: DatePickerMonthYearSelectorMonthPropsType) => {
    let result = {};

    if (selected) {
        result = css`
            ${result};
            color: ${color('neutral.00')};
            background-color: ${color('primary.main')};
        `;
    }

    return result;
};

export const DatePickerMonthYearSelectorMonth = styled.button.withConfig(
    propsBlocker,
)<DatePickerMonthYearSelectorMonthPropsType>`
    ${reset()};
    ${buttonReset()};
    outline: none; // todo: fix this
    padding: ${spacing(3)} ${spacing(5.6)};

    color: ${color('neutral.11')};
    ${typography('paragraphMedium')};
    line-height: ${pixelToRem(16)};
    ${transition({
        'background-color': 0.1,
        color: 0.1,
    })};
    &:hover {
        color: ${color('neutral.00')};
        background-color: ${color('primary.main')};
    }
    border-radius: ${borderRadius('round')};
    user-select: none;
    display: block;
    cursor: pointer;
    text-align: center;

    ${getMonthStyle};
`;
