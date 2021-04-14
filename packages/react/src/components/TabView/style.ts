import styled from 'styled-components';

import { marginAttributes } from '../../system';
import { TabViewRootPropsType } from './type';
import { Typography } from '../Typography';

const themeStyle = ({
    theme: {
        componentOverrides: { TabView },
    },
}: TabViewRootPropsType) => TabView.Root.base;

export const TabViewRoot = styled(Typography)<TabViewRootPropsType>`
    ${themeStyle};
    ${marginAttributes};
`;
