import styled from 'styled-components';
import { NavigationRootPropsType } from './type';
import { marginAttributes, widthAttributes, propsBlocker } from '../../system';

const getRootDynamicStyle = ({ theme }: NavigationRootPropsType) => {
    const {
        componentOverrides: { Navigation },
    } = theme;

    const result = Navigation.Root.base;

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const NavigationRoot = styled.div.withConfig(propsBlocker)<
    NavigationRootPropsType
>`
    box-sizing: border-box;

    ${getRootDynamicStyle};
    ${marginAttributes};
    ${widthAttributes};
`;
