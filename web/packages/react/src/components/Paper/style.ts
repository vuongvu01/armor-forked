import styled from 'styled-components';
import { PaperRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';

export const PaperRoot = styled.div<PaperRootPropsType>`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    ${({ theme }: PaperRootPropsType) =>
        theme.componentOverrides.Paper.Root.base}
    ${marginAttributes}
    ${(props: PaperRootPropsType) => props.styles(props)}
`;
