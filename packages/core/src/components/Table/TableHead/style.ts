import styled from 'styled-components';
import { propsBlocker } from '@deliveryhero/armor-system';

import { TableHeadRootPropsType } from './type';

const getRootBaseStyle = ({ theme }: TableHeadRootPropsType) =>
    theme.componentOverrides.TableHead.Root.base;

/** 👉 ROOT ELEMENT */
export const TableHeadRoot = styled.thead.withConfig(propsBlocker)<
    TableHeadRootPropsType
>`
    ${getRootBaseStyle};
`;
