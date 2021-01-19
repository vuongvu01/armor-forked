import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker } from '../../utils';
import { TabViewRootPropsType } from './type';
import { Typography } from '../Typography';

const themeStyle = ({
    theme: {
        componentOverrides: { TabView },
    },
}: TabViewRootPropsType) => TabView.Root.base;

export const TabViewRoot = styled(Typography).withConfig(
    getPropsBlocker({}, false),
)<TabViewRootPropsType>`
    ${themeStyle}
    ${marginAttributes}
`;
