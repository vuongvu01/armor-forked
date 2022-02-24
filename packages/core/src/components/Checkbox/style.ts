import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    spacing,
    getComponentOverride,
    fontWeightRegular,
    mouseCursor,
    pointerEvents,
    getOutlineFocusStyleFromColor,
    color,
    transition,
    token,
} from '@deliveryhero/armor-system';
import { TickThickIcon, DashIcon } from '@deliveryhero/armor-icons';

import {
    CheckboxCheckmarkPropsType,
    CheckboxInputPropsType,
    CheckboxRootPropsType,
} from './type';

const sizes = {
    checkbox: {
        side: 16,
        icon: 10,
    },
};

const checkedHover = () => css`
    border-color: ${color('primary.05')};
    background: ${color('primary.05')};
`;

const uncheckedHover = () => css`
    border-color: ${color('primary.05')};
`;

const getIconStyle = ({
    disabled,
    checked,
}: {
    disabled?: boolean;
    checked?: boolean;
}) => {
    let result = css`
        color: ${color('neutral.00')};
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${sizes.checkbox.icon}px;
        height: ${sizes.checkbox.icon}px;
        transform: translate(-50%, -50%);
    `;

    if (!checked) {
        result = css`
            ${result};
            display: none;
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.03')};
        `;
    }

    return result;
};

export const StyledCheckedIcon = styled(TickThickIcon)`
    ${getIconStyle};
`;

export const StyledDashIcon = styled(DashIcon)`
    ${getIconStyle};
`;

export const CheckboxCheckmark = styled.div.withConfig(
    propsBlocker,
)<CheckboxCheckmarkPropsType>`
    position: relative;
    width: ${sizes.checkbox.side}px;
    height: ${sizes.checkbox.side}px;

    ${({ hasLabel }: CheckboxCheckmarkPropsType) =>
        hasLabel
            ? css`
                  margin-top: ${spacing(1)};
              `
            : ''}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${sizes.checkbox.side}px;
        height: ${sizes.checkbox.side}px;
        border-radius: ${token('shape.borderRadius.soft')};
        box-sizing: border-box;
        border: 1px solid ${color('neutral.03')};
        background: ${color('neutral.00')};
        ${transition({ all: true })};
    }

    ${pointerEvents};
`;

export const CheckboxInput = styled.input.withConfig(
    propsBlocker,
)<CheckboxInputPropsType>`
    opacity: 0;
    position: absolute;
    margin: 0;
    height: 0;
    width: 0;

    &:not(:checked)
        + ${CheckboxCheckmark}:hover:before,
        &:not(:checked)
        + ${CheckboxCheckmark}:active:before {
        border-width: 1px;
        border-style: solid;
        ${uncheckedHover}
    }

    &:checked
        + ${CheckboxCheckmark}:hover:before,
        &:not(:checked)
        + ${CheckboxCheckmark}:active:before {
        ${checkedHover}
    }

    &:checked + ${CheckboxCheckmark}:before {
        opacity: 1;
        box-sizing: border-box;
        border-color: ${color('primary.main')};
        background: ${color('primary.main')};
    }

    &:disabled + ${CheckboxCheckmark}:before {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        box-sizing: border-box;
        border-color: ${color('neutral.03')};
        background: ${color('neutral.02')};
    }

    &:focus-visible:checked + ${CheckboxCheckmark}:before {
        ${getOutlineFocusStyleFromColor('primary.07')};
        border-color: ${color('neutral.00')};
    }

    &:focus-visible:not(:checked) + ${CheckboxCheckmark}:before {
        ${getOutlineFocusStyleFromColor('primary.07')};
        border-color: ${color('primary.main')};
    }
`;

/** 👉 ROOT ELEMENT */
export const CheckboxRoot = styled.label.withConfig(
    propsBlocker,
)<CheckboxRootPropsType>`
    display: inline-flex;
    margin: 0;
    font-weight: ${fontWeightRegular};

    &:hover {
        ${CheckboxInput} {
            &:checked:not(:focus-visible):not(:disabled)
                + ${CheckboxCheckmark}:before {
                ${checkedHover}
            }
            &:checked:focus-visible:not(:disabled)
                + ${CheckboxCheckmark}:before {
                background: ${color('primary.05')};
            }
            &:not(:checked):not(:disabled) + ${CheckboxCheckmark}:before {
                ${uncheckedHover}
            }
        }
    }

    ${mouseCursor};
    ${getComponentOverride('Checkbox')};
    ${marginProps};
`;
