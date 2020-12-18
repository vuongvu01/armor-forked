import { css } from 'styled-components';
import {
    colorBlue10,
    colorBlue20,
    colorGrey40,
    colorGrey80,
    colorGrey90,
} from '../../../../tokens';
import { TagRootPropsType } from '../../../../components/Tag/type';
import { isStatusTag } from '../../../../components/Tag/utils';

export const getTagOverride = ({ type }: TagRootPropsType) => {
    let result = css`
        .Tag-CloseIconContainer {
            color: ${colorGrey40};
            &:hover {
                background-color: ${colorBlue10};
                color: ${colorGrey90};
            }
        }

        .Tag-Label {
            color: ${colorBlue20};
        }
    `;

    if (!isStatusTag(type)) {
        result = css`
            ${result};
            background-color: rgba(146, 186, 246, 0.2);
            border-color: ${colorBlue20};
        `;
    } else {
        result = css`
            ${result};
            .Tag-Label {
                color: ${colorGrey80};
            }
        `;
    }

    return result;
};
