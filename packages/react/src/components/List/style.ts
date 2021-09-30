import styled, { css } from 'styled-components';
import { ListRootPropsType } from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    widthAttributes,
    reset,
    typography,
    pixelToRem,
} from '../../system';

const getRootStyle = ({ small }: ListRootPropsType) => {
    let result = {};

    if (small) {
        result = css`
            ${result};
            ${typography('paragraphSmall')};
            font-size: ${pixelToRem(14)};
        `;
    } else {
        result = css`
            ${result};
            ${typography('paragraphMedium')};
            font-size: ${pixelToRem(16)};
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const ListRoot = styled.div.withConfig(propsBlocker)<ListRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    ${getRootStyle};
    ${getComponentOverride('List')};
    ${marginAttributes};
    ${widthAttributes};
`;
