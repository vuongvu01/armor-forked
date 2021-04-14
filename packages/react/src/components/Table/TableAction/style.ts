import styled from 'styled-components';
import { TableActionRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    propsBlocker,
} from '../../../system';
import { transitionDurationInSec } from '../../../constants';

const getRootDynamicStyle = ({ theme }: TableActionRootPropsType) =>
    theme.componentOverrides.TableAction.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableActionRoot = styled.div.withConfig(propsBlocker)<
    TableActionRootPropsType
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: color ${transitionDurationInSec}s ease;
    cursor: pointer;

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${paddingAttributes}
`;
