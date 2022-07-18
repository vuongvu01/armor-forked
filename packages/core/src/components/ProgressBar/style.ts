import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    marginProps,
    widthProps,
    heightProps,
    propsBlocker,
    getComponentOverride,
    reset,
    color,
    spacing,
    transition,
    colorProps,
} from '@deliveryhero/armor-system';
import {
    ProgressBarRootPropsType,
    ProgressBarIndicatorPropsType,
} from './type';
import { ProgressBarLevels } from './constants';

const presetProgressIndicatorColorMap = {
    [ProgressBarLevels.SUCCESS]: 'success.10',
    [ProgressBarLevels.INFO]: 'primary.06',
    [ProgressBarLevels.WARNING]: 'warning.10',
    [ProgressBarLevels.ERROR]: 'error.10',
    [ProgressBarLevels.FILE_UPLOAD]: 'primary.06',
};

const getRootStyle = ({ preset }: ProgressBarRootPropsType) => {
    let result = css`
        width: 100%;
    `;

    if (preset) {
        result = css`
            ${result};
            background-color: ${preset === ProgressBarLevels.FILE_UPLOAD
                ? color('neutral.03')
                : 'none'};
        ` as FlattenSimpleInterpolation;
    }

    return result;
};

const getProgressIndicatorStyle = ({
    preset,
    progress,
    color: backgroundColor,
}: ProgressBarIndicatorPropsType) => {
    let result = css`
        height: ${spacing(1)};
        width: ${progress}%;
        background-color: ${backgroundColor || color('primary.06')};
    `;

    if (preset) {
        result = css`
            ${result};
            background-color: ${color(presetProgressIndicatorColorMap[preset])};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ProgressBarRoot = styled.div.withConfig(
    propsBlocker,
)<ProgressBarRootPropsType>`
    ${reset};

    ${getRootStyle};
    ${colorProps};
    ${getComponentOverride('ProgressBar')};
    ${marginProps};
    ${widthProps};
`;

export const ProgressBarIndicator = styled.div.withConfig(
    propsBlocker,
)<ProgressBarIndicatorPropsType>`
    ${reset};
    ${transition({ width: true, backgroundColor: true })};
    ${getProgressIndicatorStyle};
    ${heightProps};
`;
