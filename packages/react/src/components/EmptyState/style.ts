import styled, { css } from 'styled-components';
import {
    EmptyStateRootPropsType,
    EmptyStateTitlePropsType,
    EmptyStateActionContainerPropsType,
    EmptyStateHorizontalPropsType,
    EmptyStateVerticalPropsType,
    EmptyStateContainerPropsType,
    EmptyStateDescriptionPropsType,
    EmptyStateImageContainerPropsType,
    EmptyStateImagePropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    pixelToRem,
    sizeAttributes,
} from '../../system';

const sizes = { default: 160, small: 80 };

const getAlignmentStyle = ({
    preset,
}: Pick<EmptyStateRootPropsType, 'preset'>) => {
    let result = css`` as {};
    if (preset === 'left') {
        result = css`
            ${result};
            justify-content: left;
            align-items: flex-start;
        `;
    } else if (preset === 'middle') {
        result = css`
            ${result};
            text-align: center;
            justify-content: center;
            align-items: center;
        `;
    } else if (preset === 'right') {
        result = css`
            ${result};
            justify-content: right;
            align-items: flex-end;
            text-align: right;
        `;
    }
    return result;
};

const getEmptyStateContainerStyle = ({ layout }: EmptyStateRootPropsType) => {
    let result = {};
    if (layout === 'horizontal') {
        result = css`
            ${result};
            display: flex;
            flex-direction: column;
            justify-content: left;
            width: fit-content;
        `;
    }
    return result;
};

const getTitleStyle = ({
    titlePosition,
    layout,
    small,
}: EmptyStateTitlePropsType) => {
    let result = css`
        display: flex;
    ` as {};
    if (layout === 'vertical') {
        result = css`
            ${result};
            margin-top: ${spacing(4.5)};
        `;
    }
    if (titlePosition === 'left') {
        result = css`
            ${result};
            align-self: flex-start;
        `;
    } else if (titlePosition === 'middle') {
        result = css`
            ${result};
            align-self: center;
        `;
    } else if (titlePosition === 'right') {
        result = css`
            ${result};
            align-self: flex-end;
        `;
    }
    if (small) {
        result = css`
            ${result};
            font-size: ${pixelToRem(20)};
        `;
    }
    return result;
};

const getDescriptionStyle = ({
    descriptionPosition,
    small,
}: EmptyStateDescriptionPropsType) => {
    let result = {};
    if (small) {
        result = css`
            ${result};
            font-size: ${pixelToRem(14)};
            margin-top: ${spacing(2)};
        `;
    }
    if (descriptionPosition === 'left') {
        result = css`
            ${result};
            text-align: left;
        `;
    } else if (descriptionPosition === 'middle') {
        result = css`
            ${result};
            text-align: center;
        `;
    } else if (descriptionPosition === 'right') {
        result = css`
            ${result};
            text-align: right;
        `;
    }
    return result;
};

// to do resize to the image
const getImageStyle = ({ imagePosition }: EmptyStateImagePropsType) => {
    let result = {};
    if (imagePosition === 'left') {
        result = css`
            ${result};
            align-self: flex-start;
        `;
    } else if (imagePosition === 'middle') {
        result = css`
            ${result};
            align-self: center;
        `;
    } else if (imagePosition === 'right') {
        result = css`
            ${result};
            align-self: flex-end;
        `;
    }
    return result;
};

const getActionsContainerStyle = ({
    actionsPosition,
    small,
}: EmptyStateActionContainerPropsType) => {
    let result = css`
        display: flex;
    ` as {};
    if (actionsPosition === 'left') {
        result = css`
            ${result};
            align-self: flex-start;
        `;
    } else if (actionsPosition === 'middle') {
        result = css`
            ${result};
            align-self: center;
        `;
    } else if (actionsPosition === 'right') {
        result = css`
            ${result};
            align-self: flex-end;
        `;
    }
    if (small) {
        result = css`
            ${result};
            margin-top: ${spacing(4)};
        `;
    }
    return result;
};

const getSVGStyle = ({ small }: { small?: boolean }) => {
    const side = small ? sizes.small : sizes.default;
    return css`
        width: ${side}px;
        height: ${side}px;
    `;
};

/** 👉 ROOT ELEMENT */
export const EmptyStateRoot = styled.div.withConfig(propsBlocker)<
    EmptyStateRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    display: flex;
    flex-direction: column;
    width: fit-content;
    ${getAlignmentStyle};
    ${getComponentOverride('EmptyState')};
    ${marginAttributes};
    ${sizeAttributes};
`;
export const EmptyStateTitle = styled.div.withConfig(propsBlocker)<
    EmptyStateTitlePropsType
>`
    ${typography('paragraphMedium')};
    color: ${color('neutral.11')};
    font-size: ${pixelToRem(32)};
    max-height: ${pixelToRem(48)};
    ${getTitleStyle};
    ${marginAttributes};
`;
export const EmptyStateDescription = styled.div.withConfig(propsBlocker)<
    EmptyStateDescriptionPropsType
>`
    ${typography('paragraphMedium')};
    color: ${color('neutral.11')};
    font-size: ${pixelToRem(16)};
    max-height: ${spacing(60)};
    margin-top: ${spacing(4)};
    ${getDescriptionStyle};
    ${marginAttributes};
`;
export const EmptyStateActionContainer = styled.div.withConfig(propsBlocker)<
    EmptyStateActionContainerPropsType
>`
    margin-top: ${spacing(8)};
    ${getActionsContainerStyle};
    ${marginAttributes};
`;
export const EmptyStateHorizontalLayout = styled.div.withConfig(propsBlocker)<
    EmptyStateHorizontalPropsType
>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: ${spacing(130)};
`;
export const EmptyStateContainer = styled.div.withConfig(propsBlocker)<
    EmptyStateContainerPropsType
>`
    margin-left: ${spacing(10)};
    ${// @ts-ignore
    getEmptyStateContainerStyle};
`;
export const EmptyStateVerticalLayout = styled.div.withConfig(propsBlocker)<
    EmptyStateVerticalPropsType
>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: ${spacing(80)};
    width: fit-content;
    ${getAlignmentStyle};
`;
export const EmptyStateImageContainer = styled.div.withConfig(propsBlocker)<
    EmptyStateImageContainerPropsType
>`
    display: flex;
    ${getImageStyle};
`;

export const EmptyStateIllustrationSVG = styled.svg.withConfig(propsBlocker)<{
    small?: boolean;
}>`
    ${getSVGStyle};
`;
