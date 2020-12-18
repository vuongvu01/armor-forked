import styled, { css } from 'styled-components';

import { transitionDurationInSec } from '../../constants';
import { SelectorLabelPropsType } from './type';

const labelStyle = ({
    theme: {
        componentOverrides: { SelectorLabel },
    },
    disabled,
    error,
}: SelectorLabelPropsType) => {
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

export const SelectorLabelRoot = styled.div<SelectorLabelPropsType>`
    transition: all ${transitionDurationInSec}s ease;

    ${labelStyle}
`;
