import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    colorProps,
    marginProps,
    textAlignmentProps,
    propsBlocker,
    getComponentOverride,
    typography,
    token,
    color,
    pixelToRemToken,
} from '@deliveryhero/armor-system';

import { TypographyRootPropsType } from './type';
import { getTypographyName } from './utils/getTypographyName';

const getRootStyle = ({
    error,
    disabled,
    ...props
}: TypographyRootPropsType) => {
    let textColor = token('body.color');

    if (error && disabled) {
        textColor = color('error.lighter');
    }

    if (error) {
        textColor = color('error.main');
    }

    if (disabled) {
        textColor = color('neutral.05');
    }

    const variant = getTypographyName(props);

    return css`
        ${typography(variant)};
        color: ${textColor};
    `;
};

const getWordBreakStyle = ({ wordBreak }: TypographyRootPropsType) => {
    if (!wordBreak) return '';

    return css`
        word-break: ${wordBreak};
    `;
};

const getMaxLinesStyle = ({ maxLines, ...props }: TypographyRootPropsType) => {
    if (typeof maxLines !== 'undefined') {
        return css`
            max-height: calc(
                ${pixelToRemToken(
                        `typography.${getTypographyName(props)}.lineHeight`,
                    )} * ${Number(maxLines)}
            );
            overflow-y: hidden;
        `;
    }

    return '';
};

const Wrapper = ({
    children,
    ...restProps
}: TypographyRootPropsType & {
    children: (props: TypographyRootPropsType) => ReactElement;
}) => children({ ...restProps });

/** 👉 ROOT ELEMENT */
export const TypographyRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<TypographyRootPropsType>`
    box-sizing: border-box;
    margin-inline-start: 0;
    margin-inline-end: 0;
    ${getRootStyle};
    ${getMaxLinesStyle};
    ${getComponentOverride('Typography')};
    ${marginProps};
    ${colorProps};
    ${textAlignmentProps};
    ${getWordBreakStyle};
`;
