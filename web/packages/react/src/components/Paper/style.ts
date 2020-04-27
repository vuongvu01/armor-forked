import styled from 'styled-components';
import { PaperRootStylePropsType } from './type';
import { marginAttributes } from '../../system/attributes';

export const PaperRoot = styled.div<PaperRootStylePropsType>`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    ${({ theme }) => theme.components.Paper.Root.base}
    ${marginAttributes}
    ${props => props.styles(props)}
`;
