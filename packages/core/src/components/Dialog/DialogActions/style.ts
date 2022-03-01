import styled from 'styled-components';
import {
    paddingProps,
    propsBlocker,
    spacing,
} from '@deliveryhero/armor-system';

import { DialogActionsRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const DialogActionsRoot = styled.div.withConfig(
    propsBlocker,
)<DialogActionsRootPropsType>`
    flex: 0 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: ${spacing(6)};
    &:not(:first-child) {
        padding-top: ${spacing(12)};
    }
    & > *:not(:last-child) {
        margin-right: ${spacing(4)};
    }
    ${paddingProps};
`;
