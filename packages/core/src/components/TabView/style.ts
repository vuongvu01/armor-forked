import styled from 'styled-components';
import { marginProps, typography } from '@deliveryhero/armor-system';

import { TabViewRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TabViewRoot = styled.div<TabViewRootPropsType>`
    ${typography('paragraphLarge')};
    ${marginProps};
`;
