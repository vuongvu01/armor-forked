import { css } from 'styled-components';
import {
    colorGrey60,
    colorGrey60WithOpacity,
    colorGrey70,
} from '../../../../../tokens';
import { OptionListItemPropsType } from '../../../../../components/OptionList/type';

export const getOptionListItemOverride = ({
    isSelected,

    item: { disabled },
}: OptionListItemPropsType) => {
    let result = css`
        background-color: ${disabled
            ? colorGrey60WithOpacity
            : colorGrey70}; // an exception case for the lack of intermediate color

        &:hover {
            background-color: ${disabled
                ? colorGrey60WithOpacity
                : colorGrey60};
        }
    `;

    if (isSelected) {
        result = css`
            ${result};
            background-color: ${disabled
                ? colorGrey60WithOpacity
                : colorGrey60};
        `;
    }

    return result;
};
