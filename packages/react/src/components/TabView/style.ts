import styled from 'styled-components';

import { marginAttributes } from '../../system';
import { TabViewRootPropsType } from './type';

const themeStyle = ({
    theme: {
        componentOverrides: { TabView },
    },
}: TabViewRootPropsType) => TabView.Root.base;

/** 👉 ROOT ELEMENT */
export const TabViewRoot = styled.div<TabViewRootPropsType>`
    ${themeStyle};
    ${marginAttributes};
`;
