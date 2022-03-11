import styled from 'styled-components';
import { marginProps, token, typography } from '@deliveryhero/armor-system';

import { TabViewRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TabViewRoot = styled.div<TabViewRootPropsType>`
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    ${marginProps};
`;
