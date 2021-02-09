import { css } from 'styled-components';
import { colorGrey60, colorGrey70 } from '../../../../tokens';
import { OptionListItemPropsType } from '../../../../components/OptionList/type';

export const getOptionListItemOverride = ({
    isSelected,
}: OptionListItemPropsType) => {
    let result = css`
        background-color: ${colorGrey70};

        &:hover {
            background-color: ${colorGrey60};
        }
    `;
    if (isSelected) {
        result = css`
            ${result};
            background-color: ${colorGrey60};
        `;
    }

    return result;
};
