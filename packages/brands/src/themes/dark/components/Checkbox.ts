import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
} from '@deliveryhero/armor-system';
import { ButtonPropsType } from '@deliveryhero/armor';

type CheckboxRootPropsType = ButtonPropsType &
    Partial<{
        reallyChecked: boolean;
    }>;

export const getCheckboxOverride = ({
    disabled,
    reallyChecked: checked,
}: CheckboxRootPropsType) => {
    let result = css`
        .Checkbox-Input {
            &:focus-visible + .Checkbox-Checkmark:before {
                ${getOutlineFocusStyleFromColor('primary.03')}
            }
        }
    ` as FlattenSimpleInterpolation;

    if (!disabled) {
        result = css`
            ${result};
            &:hover {
                .Checkbox-Input {
                    &:checked:not(:focus-visible) + .Checkbox-Checkmark:before {
                        border-color: ${color('primary.02')};
                        background-color: ${color('primary.02')};
                    }
                    &:checked:focus-visible + .Checkbox-Checkmark:before {
                        background-color: ${color('primary.02')};
                    }
                    &:not(:checked) + .Checkbox-Checkmark:before {
                        border-color: ${color('primary.02')};
                    }
                }
            }
        ` as FlattenSimpleInterpolation;
    }

    if (!checked && !disabled) {
        result = css`
            ${result};
            &&& {
                .Checkbox-Checkmark:before {
                    background: ${color('neutral.01')};
                }
            }
        ` as FlattenSimpleInterpolation;
    }

    if (disabled) {
        result = css`
            ${result};
            &&& {
                .Checkbox-Checkmark {
                    &:before {
                        border-color: ${color('neutral.07')};
                        background-color: ${color('neutral.03')};
                    }
                    &:after {
                        color: ${color('neutral.05')};
                    }
                }
            }
        ` as FlattenSimpleInterpolation;
    }

    return result;
};
