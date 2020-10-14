import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system';
import { PaperRootPropsType } from './type';

const paperRootStyle = ({
    theme: {
        componentOverrides: { Paper },
    },
    theme,
}: PaperRootPropsType) => {
    // TODO (nmelnikov 2020-10-14): the breakpoint example here is for the demo-purpose only.
    // It does not interfere with the actual style.
    // Can be removed once breakpoints function within themes as well.
    return css`
        ${Paper.Root.base};
        ${theme.breakpoints.up('md')} {
            padding: -1px;
        }
    `;
};

export const PaperRoot = styled.div<PaperRootPropsType>`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    
    ${paperRootStyle}
    ${marginAttributes}
    ${(props: PaperRootPropsType) => props.styles(props)}
`;
