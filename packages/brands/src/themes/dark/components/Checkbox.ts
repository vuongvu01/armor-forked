import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
} from '@deliveryhero/armor-system';
import { CheckboxPropsType } from '@deliveryhero/armor';

export const getCheckboxOverride = ({
    disabled,
    checked,
}: CheckboxPropsType) => {
    let result = css`
        .Checkbox-Input {
            &:focus-visible + .Checkbox-Checkmark:before {
                ${getOutlineFocusStyleFromColor('primary.03')}
            }
        }

        &:hover {
            .Checkbox-Input {
                &:checked:not(:focus-visible):not(:disabled)
                    + .Checkbox-Checkmark:before {
                    border-color: ${color('primary.02')};
                    background-color: ${color('primary.02')};
                }
                &:checked:focus-visible:not(:disabled)
                    + .Checkbox-Checkmark:before {
                    background-color: ${color('primary.02')};
                }
                &:not(:checked):not(:disabled) + .Checkbox-Checkmark:before {
                    border-color: ${color('primary.02')};
                }
            }
        }
    ` as FlattenSimpleInterpolation;

    if (!checked && !disabled) {
        result = css`
            ${result};
            .Checkbox-Checkmark:before {
                background: ${color('neutral.01')};
            }
        ` as FlattenSimpleInterpolation;
    }

    if (disabled) {
        result = css`
            ${result};
            .Checkbox-Input:disabled + .Checkbox-Checkmark {
                &:before {
                    border-color: ${color('neutral.07')};
                    background-color: ${color('neutral.03')};
                }
            }
            .Checkbox-Icon {
                color: ${color('neutral.05')};
            }
        ` as FlattenSimpleInterpolation;
    }

    return result;
};
