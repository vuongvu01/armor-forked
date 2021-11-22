import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    propsBlocker,
    durationNormal,
} from '@deliveryhero/armor-system';

import { TableActionRootPropsType } from './type';

const getRootDynamicStyle = ({ theme }: TableActionRootPropsType) =>
    theme.componentOverrides.TableAction.Root.base;

/** 👉 ROOT ELEMENT */
export const TableActionRoot = styled.div.withConfig(propsBlocker)<
    TableActionRootPropsType
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: color ${durationNormal}ms ease;
    cursor: pointer;

    ${getRootDynamicStyle};
    ${marginProps};
    ${paddingProps};
`;
