import styled from 'styled-components';

export const TooltipCanvas = styled.div`
    display: grid;
    grid-auto-rows: 15%;
    gap: 24px;
    height: 100vh;
    width: 100%;

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
