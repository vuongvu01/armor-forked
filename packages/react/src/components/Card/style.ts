import styled from 'styled-components';

import {
    borderRadius,
    color,
    marginAttributes,
    paddingAttributes,
    propsBlocker,
    sizeAttributes,
    token,
} from '../../system';
import { CardRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const CardRoot = styled.div.withConfig(propsBlocker)<CardRootPropsType>`
    background-color: ${color('neutral.00')};
    border-radius: ${borderRadius('soft')};
    box-shadow: ${token('elevation.small')};

    ${marginAttributes};
    ${paddingAttributes};
    ${sizeAttributes};
`;
