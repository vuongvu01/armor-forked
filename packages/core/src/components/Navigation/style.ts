import styled from 'styled-components';
import {
    marginProps,
    widthProps,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { NavigationRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const NavigationRoot = styled.div.withConfig(
    propsBlocker,
)<NavigationRootPropsType>`
    box-sizing: border-box;

    ${getComponentOverride('Navigation')};
    ${marginProps};
    ${widthProps};
`;
