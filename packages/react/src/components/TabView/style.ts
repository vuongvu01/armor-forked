import styled from 'styled-components';

import { marginAttributes, typography } from '../../system';
import { TabViewRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TabViewRoot = styled.div<TabViewRootPropsType>`
    ${typography('paragraphLarge')};
    ${marginAttributes};
`;
