import { css } from 'styled-components';
import { colorGrey60WithOpacity, color } from '@deliveryhero/armor-system';
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
    item: { disabled },
}: OptionListItemPropsType) => {
    let result = css`
        background-color: ${disabled
            ? colorGrey60WithOpacity /*  an exception case for the lack of intermediate color: ; */
            : color('neutral.09')};

        &:hover {
            ${focusedHoverState}
        }
    `;

    if (isFocused) {
        result = css`
            ${result};
            ${focusedHoverState}
        `;
    }

    if (isSelected && disabled) {
        result = css`
            ${result};
            background-color: ${colorGrey60WithOpacity};
        `;
    }

    return result;
};
