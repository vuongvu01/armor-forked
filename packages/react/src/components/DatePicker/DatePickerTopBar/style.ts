import styled, { css } from 'styled-components';
import { ArrowDownFilledIcon } from '@deliveryhero/armor-icons';
import { DatePickerTopBarRootPropsType } from './type';
import {
    DatePickerTopBarMonthNavigationButtonForwardPropsType,
    DatePickerTopBarMonthYearSelectorToggleArrowPropsType,
    DatePickerTopBarMonthYearSelectorTogglePropsType,
} from '../type';
import {
    transition,
    getComponentOverride,
    color,
    reset,
    spacing,
    propsBlocker,
} from '../../../system';
import { transitionDurationInSec } from '../../../constants';

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const DatePickerTopBarRoot = styled.div.withConfig(propsBlocker)<
    DatePickerTopBarRootPropsType
>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing(4)} ${spacing(5)} 0 ${spacing(6)};
    ${getComponentOverride('DatePickerTopBar')};
`;

const getMonthYearSelectorToggleStyle = ({
    open,
}: DatePickerTopBarMonthYearSelectorTogglePropsType) => {
    let result = {};

    if (open) {
        result = css`
            ${result};
            color: ${color('neutral.04')};
        `;
    }

    return result;
};

export const DatePickerTopBarMonthYearSelectorToggle = styled.a.withConfig(
    propsBlocker,
)<DatePickerTopBarMonthYearSelectorTogglePropsType>`
    ${reset()};
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    color: ${color('neutral.06')};
    ${transition({
        color: 0.1,
    })};
    ${getMonthYearSelectorToggleStyle};
`;

const getMonthYearSelectorToggleArrowStyle = ({
    open,
}: DatePickerTopBarMonthYearSelectorToggleArrowPropsType) => {
    let result = {};

    if (open) {
        result = css`
            ${result};
            transform: rotate(0.5turn);
        `;
    }

    return result;
};

export const DatePickerTopBarMonthYearSelectorToggleArrow = styled(
    ArrowDownFilledIcon,
)<DatePickerTopBarMonthYearSelectorToggleArrowPropsType>`
    transition: transform ${transitionDurationInSec}s ease;
    ${getMonthYearSelectorToggleArrowStyle};
`;

export const DatePickerTopBarMonthNavigation = styled.div.withConfig(
    propsBlocker,
)`
    ${reset()};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color('neutral.06')};
`;

const getMonthNavigationButtonForwardStyle = ({
    disabled,
}: DatePickerTopBarMonthNavigationButtonForwardPropsType) => {
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

export const DatePickerTopBarMonthNavigationButtonForward = styled.button.withConfig(
    propsBlocker,
)<DatePickerTopBarMonthNavigationButtonForwardPropsType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 0 none;
    appearance: none;
    background-color: transparent;
    color: ${color('neutral.06')};

    ${getMonthNavigationButtonForwardStyle}
`;

export const DatePickerTopBarMonthNavigationButtonBackward = styled(
    DatePickerTopBarMonthNavigationButtonForward,
)<DatePickerTopBarMonthNavigationButtonForwardPropsType>`
    svg {
        transform: rotate(0.5turn);
    }
    margin-right: ${spacing(5)};
`;
