import styled from 'styled-components';
import {
    propsBlocker,
    marginProps,
    typography,
} from '@deliveryhero/armor-system';

import { BadgeRootPropsType } from './type';

export const BadgeRoot = styled.div.withConfig(
    propsBlocker,
)<BadgeRootPropsType>`
    ${typography('labelMedium')};
    color: inherit;
    font-size: 14px; // todo: remove this when label medium is fixed
    ${marginProps};
`;
