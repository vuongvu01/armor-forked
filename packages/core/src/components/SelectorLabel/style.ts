import styled, { css } from 'styled-components';
import {
    color,
    durationNormal,
    propsBlocker,
    spacing,
} from '@deliveryhero/armor-system';

import { SelectorLabelRootPropsType } from './type';

const getStyle = ({ disabled, error }: SelectorLabelRootPropsType) => {
    let result = css`
        padding-left: ${spacing(4)};
    `;

    if (disabled && error) {
        result = css`
            ${result};
            color: ${color('error.lighter')};
        `;
    } else if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
        `;
    } else if (error) {
        result = css`
            ${result};
            color: ${color('error.main')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const SelectorLabelRoot = styled.div.withConfig(
    propsBlocker,
)<SelectorLabelRootPropsType>`
    transition: all ${durationNormal}ms ease;
    ${getStyle};
`;
