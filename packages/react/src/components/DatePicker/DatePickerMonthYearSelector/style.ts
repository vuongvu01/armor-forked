import styled, { css } from 'styled-components';
import {
    DatePickerMonthYearSelectorRootPropsType,
    DatePickerMonthYearSelectorYearPropsType,
    DatePickerMonthYearSelectorListPropsType,
    DatePickerMonthYearSelectorYearTitlePropsType,
    DatePickerMonthYearSelectorMonthListPropsType,
    DatePickerMonthYearSelectorMonthPropsType,
} from './type';
import { marginAttributes } from '../../../system/attributes';
import {
    shouldForwardProp,
    makePropList,
    getPropsBlocker,
} from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import {
    borderRadius,
    color,
    pixelToRem,
    reset,
    spacing,
    typography,
} from '../../../system/mixins';
import { transition } from '../../../system/mixins/transition';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    // 'exampleProperty',
]);

const getRootStyle = (props: DatePickerMonthYearSelectorRootPropsType) => {
    const result = {};

    // if (exampleProperty) {
    //     result = css`
    //         ${result};
    //         color: red;
    //     `;
    // }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const DatePickerMonthYearSelectorRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: ${spacing(4)};

    ${getRootStyle};
    ${getComponentOverride('DatePickerMonthYearSelector')};
    ${marginAttributes};
`;

export const DatePickerMonthYearSelectorList = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorListPropsType>`
    ${reset()};
`;

export const DatePickerMonthYearSelectorYear = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorYearPropsType>`
    ${reset()};
    &:not(:first-child) {
        border-top: 1px solid ${color('neutral.03')};
    }
`;

export const DatePickerMonthYearSelectorYearTitle = styled.a.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorYearTitlePropsType>`
    ${reset()};
    padding: ${spacing(4)};
    background-color: ${color('neutral.02')};
    line-height: ${pixelToRem(16)};
    cursor: pointer;
    display: block;
`;

export const DatePickerMonthYearSelectorMonthList = styled.div.withConfig(
    getPropsBlocker(propertyList),
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

export const DatePickerMonthYearSelectorMonth = styled.a.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorMonthPropsType>`
    ${reset()};
    padding: ${spacing(3)} ${spacing(5.6)};

    color: ${color('neutral.06')};
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
`;
