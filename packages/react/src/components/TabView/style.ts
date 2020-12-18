import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { TabViewRootPropsType } from './type';
import { Typography } from '../Typography';

const themeStyle = ({
    theme: {
        componentOverrides: { TabView },
    },
}: TabViewRootPropsType) => TabView.Root.base;

export const TabViewRoot = styled(Typography).withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<TabViewRootPropsType>`
    ${themeStyle}
    ${marginAttributes}
`;
