import styled, { css } from 'styled-components';
import { DatePickerTopBarRootPropsType } from './type';
import { getPropsBlocker } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { color, reset, spacing } from '../../../system/mixins';
import {
    DatePickerMonthNavigationButtonForwardPropsType,
    DatePickerMonthYearSelectorTogglePropsType,
} from '../type';
import { transition } from '../../../system/mixins/transition';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    disabled: true,
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const DatePickerTopBarRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerTopBarRootPropsType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing(4)} ${spacing(6)} 0 ${spacing(6)};
    ${getComponentOverride('DatePickerTopBar')};
`;

const getMonthYearSelectorToggleStyle = ({
    open,
}: DatePickerMonthYearSelectorTogglePropsType) => {
    let result = {};

    if (open) {
        result = css`
            ${result};
            color: ${color('neutral.04')};
        `;
    }

    return result;
};

export const DatePickerMonthYearSelectorToggle = styled.a.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthYearSelectorTogglePropsType>`
    ${reset()};
    cursor: pointer;
    user-select: none;
    color: ${color('neutral.06')};
    ${transition({
        color: 0.1,
    })};
    ${getMonthYearSelectorToggleStyle}
`;

export const DatePickerMonthNavigation = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    ${reset()};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color('neutral.06')};
`;

const getMonthNavigationButtonForwardStyle = ({
    disabled,
}: DatePickerMonthNavigationButtonForwardPropsType) => {
    let result = {};

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.04')};
            cursor: initial;
        `;
    }

    return result;
};

export const DatePickerMonthNavigationButtonForward = styled.a.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerMonthNavigationButtonForwardPropsType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    ${getMonthNavigationButtonForwardStyle}
`;

export const DatePickerMonthNavigationButtonBackward = styled(
    DatePickerMonthNavigationButtonForward,
)<DatePickerMonthNavigationButtonForwardPropsType>`
    svg {
        transform: rotate(0.5turn);
    }
    margin-right: ${spacing(5)};
`;
