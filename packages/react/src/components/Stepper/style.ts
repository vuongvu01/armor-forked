import styled, { css } from 'styled-components';

import { makeBEM } from '../../utils';
import { marginAttributes, sizeAttributes, propsBlocker } from '../../system';
import { StepperRootPropsType } from './type';

const getStepperRootStyle = ({ vertical }: StepperRootPropsType) => {
    let result = {};

    if (vertical) {
        result = css`
            flex-direction: column;
        `;
    } else {
        result = css`
            .${makeBEM('Step', 'Piece')} {
                position: relative;
            }
        `;
    }

    return result;
};

// /** 👉 ROOT ELEMENT */
export const StepperRoot = styled.div.withConfig(propsBlocker)<
    StepperRootPropsType
>`
    display: flex;
    position: relative;

    ${getStepperRootStyle};
    ${sizeAttributes};
    ${marginAttributes};
`;
