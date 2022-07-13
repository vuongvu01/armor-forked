import styled from 'styled-components';
import { propsBlocker, spacing } from '@deliveryhero/armor-system';

import { ClearIconContainerPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const ClearIconRoot = styled.div.withConfig(
    propsBlocker,
)<ClearIconContainerPropsType>`
    display: flex;
    align-items: center;
    margin-right: ${spacing(3)};
`;
