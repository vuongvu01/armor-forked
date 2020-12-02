import styled from 'styled-components';

import { BadgeRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';

export const BadgeRoot = styled.div<BadgeRootPropsType>`
    ${marginAttributes};
`;
