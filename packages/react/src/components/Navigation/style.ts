import styled from 'styled-components';
import { NavigationRootPropsType } from './type';
import {
    marginAttributes,
    widthAttributes,
    propsBlocker,
    getComponentOverride,
} from '../../system';

/** 👉 ROOT ELEMENT */
export const NavigationRoot = styled.div.withConfig(propsBlocker)<
    NavigationRootPropsType
>`
    box-sizing: border-box;

    ${getComponentOverride('Navigation')};
    ${marginAttributes};
    ${widthAttributes};
`;
