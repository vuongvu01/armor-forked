import styled from 'styled-components';

import { BadgeRootPropsType } from './type';
import { propsBlocker, marginAttributes } from '../../system';

export const BadgeRoot = styled.div.withConfig(propsBlocker)<
    BadgeRootPropsType
>`
    ${marginAttributes};
`;
