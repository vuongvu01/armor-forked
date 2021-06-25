import styled, { css } from 'styled-components';
import {
    ActionSheetLabelContainerPropsType,
    ActionSheetRootPropsType,
} from './type';
import {
    color,
    getComponentOverride,
    marginAttributes,
    propsBlocker,
    reset,
    spacing,
    typography,
    widthAttributes,
} from '../../system';

const getLabelContainerStyle = ({ label }: ActionSheetRootPropsType) => {
    let result = {};

    if (typeof label === 'string') {
        result = css`
            ${typography('labelLarge')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ActionSheetRoot = styled.div.withConfig(propsBlocker)<
    ActionSheetRootPropsType
>`
    ${reset};
    align-items: center;
    background-color: ${color('primary.lightest')};
    display: flex;
    justify-content: space-between;
    padding: ${spacing(4)} ${spacing(6)};
    ${typography('paragraphMedium')};

    ${getComponentOverride('ActionSheet')};
    ${marginAttributes};
    ${widthAttributes};
`;

export const ActionSheetLabelContainer = styled.div.withConfig(propsBlocker)<
    ActionSheetLabelContainerPropsType
>`
    ${getLabelContainerStyle};
`;
