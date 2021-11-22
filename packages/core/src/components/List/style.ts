import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    widthProps,
    reset,
    typography,
    pixelToRem,
} from '@deliveryhero/armor-system';

import { ListRootPropsType } from './type';

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
    ${marginProps};
    ${widthProps};
`;
