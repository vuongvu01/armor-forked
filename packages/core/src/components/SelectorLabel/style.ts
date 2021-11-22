import styled, { css } from 'styled-components';
import { durationNormal, propsBlocker } from '@deliveryhero/armor-system';

import { SelectorLabelRootPropsType } from './type';

const labelStyle = ({
    theme: {
        componentOverrides: { SelectorLabel },
    },
    disabled,
    error,
}: SelectorLabelRootPropsType) => {
    let enhancements = '';

    if (disabled && error) {
        enhancements = SelectorLabel.Label.disabled__error;
    } else if (disabled) {
        enhancements = SelectorLabel.Label.disabled;
    } else if (error) {
        enhancements = SelectorLabel.Label.error;
    }

    return css`${SelectorLabel.Label.base}${enhancements}`;
};

/** 👉 ROOT ELEMENT */
export const SelectorLabelRoot = styled.div.withConfig(propsBlocker)<
    SelectorLabelRootPropsType
>`
    transition: all ${durationNormal}ms ease;

    ${labelStyle};
`;
