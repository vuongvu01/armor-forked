import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    propsBlocker,
    durationNormal,
    token,
    color,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { TableActionRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TableActionRoot = styled.div.withConfig(
    propsBlocker,
)<TableActionRootPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: color ${durationNormal}ms ease;
    cursor: pointer;
    font-family: ${token('typography.body.fontFamily')};
    color: ${color('neutral.07')};
    &:hover {
        color: ${color('primary.main')};
    }
    ${getComponentOverride('TableAction')};
    ${marginProps};
    ${paddingProps};
`;
