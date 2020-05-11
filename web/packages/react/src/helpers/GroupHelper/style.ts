import styled from 'styled-components';

export const GroupHelperRoot = styled.div<{ gap?: number }>`
    & > * {
        margin-bottom: ${props => props.gap}rem;
        margin-right: ${props => props.gap}rem;
    }

    margin-bottom: -${props => props.gap}rem;
    margin-right: -${props => props.gap}rem;
`;
