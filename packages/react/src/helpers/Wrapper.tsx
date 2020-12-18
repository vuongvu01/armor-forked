import styled from 'styled-components';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bgTile = require('./tile.jpg');

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    box-sizing: border-box;
    ${({ theme }) =>
        theme.backgroundChecker ? `background-image: url(${bgTile});` : ''}
    background-repeat: repeat;
`;

export const withWrapper = (Story: any) => (
    <Wrapper>
        <Story />
    </Wrapper>
);
