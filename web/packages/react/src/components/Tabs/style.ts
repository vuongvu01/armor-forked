import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { TabsRootPropsType } from './type';

const themeStyle = ({
    theme: {
        componentOverrides: { Tabs },
    },
}: TabsRootPropsType) => Tabs.Root.base;

export const TabsRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<TabsRootPropsType>`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;

    ${themeStyle}
    ${marginAttributes}
`;
