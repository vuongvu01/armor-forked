import { css } from 'styled-components';
import {
    color,
    colorGrey60,
    colorBlue20,
    colorGrey70,
    colorGrey30,
} from '@deliveryhero/armor-system';
import { OptionListItemPropsType } from '@deliveryhero/armor';

const focusedHoverState = css`
    background-color: ${color('neutral.08')};

    .Checkbox-Checkmark:before {
        border-color: ${color('primary.02')};
    }
`;

export const getOptionListItemOverride = ({
    isFocused,
    isSelected,
    multiple,
    item: { disabled },
}: OptionListItemPropsType) => {
    const isActive = isSelected && !disabled && !multiple;

    let result = css`
        background-color: ${colorGrey70};

        &:hover {
            ${focusedHoverState}
        }
    `;

    if (disabled) {
        result = css`
            ${result};

            color: ${colorGrey30};

            &:hover {
                background-color: ${colorGrey70};
            }
        `;
    }

    if (isFocused) {
        result = css`
            ${result};
            ${focusedHoverState}
        `;
    }

    if (isActive) {
        result = css`
            ${result};

            &:hover {
                background-color: ${colorGrey60};
            }

            &::before {
                background: ${colorBlue20};
            }
        `;
    }

    return result;
};
