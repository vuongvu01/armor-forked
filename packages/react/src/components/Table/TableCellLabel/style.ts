import styled from 'styled-components';
import { TableCellLabelRootPropsType } from './type';
import { marginAttributes, propsBlocker } from '../../../system';

const getRootDynamicStyle = ({ theme }: TableCellLabelRootPropsType) =>
    theme.componentOverrides.TableCellLabel.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableCellLabelRoot = styled.div.withConfig(propsBlocker)<
    TableCellLabelRootPropsType
>`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    ${getRootDynamicStyle}
    ${marginAttributes}
`;
