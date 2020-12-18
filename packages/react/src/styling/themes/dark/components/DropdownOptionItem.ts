import { css } from 'styled-components';
import { colorGrey60, colorGrey70 } from '../../../../tokens';
import { DropdownOptionItemPropsType } from '../../../../components/Dropdown/type';

export const getDropdownOptionItemOverride = ({
    isSelected,
}: DropdownOptionItemPropsType) => {
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
