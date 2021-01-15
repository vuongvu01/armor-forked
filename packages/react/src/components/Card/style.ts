import styled from 'styled-components';

import {
    borderRadius,
    color,
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system';
import { CardRootPropsType } from './type';
import { token } from '../../system/mixins';
import { getPropsBlocker } from '../../utils';

export const CardRoot = styled.div.withConfig(getPropsBlocker())<
    CardRootPropsType
>`
    background-color: ${color('neutral.00')};
    border-radius: ${borderRadius('soft')};
    box-shadow: ${token('elevation.small')};

    ${marginAttributes};
    ${paddingAttributes};
    ${sizeAttributes};
`;
