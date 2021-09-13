import styled from 'styled-components';

import { BadgeRootPropsType } from './type';
import { propsBlocker, marginAttributes, typography } from '../../system';

export const BadgeRoot = styled.div.withConfig(propsBlocker)<
    BadgeRootPropsType
>`
    ${typography('labelMedium')};
    font-size: 14px; // todo: remove this when label medium is fixed
    color: inherit;
    ${marginAttributes};
`;
