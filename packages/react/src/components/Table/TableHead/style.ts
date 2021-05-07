import styled from 'styled-components';
import { TableHeadRootPropsType } from './type';
import { propsBlocker } from '../../../system';

const getRootBaseStyle = ({ theme }: TableHeadRootPropsType) =>
    theme.componentOverrides.TableHead.Root.base;

/** 👉 ROOT ELEMENT */
export const TableHeadRoot = styled.thead.withConfig(propsBlocker)<
    TableHeadRootPropsType
>`
    ${getRootBaseStyle};
`;
