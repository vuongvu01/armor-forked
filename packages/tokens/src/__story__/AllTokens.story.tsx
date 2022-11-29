/* This file is auto-generated, don't edit by hand! */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Typography } from '@deliveryhero/armor';
import { Color as ColorTokens } from '../tokens';
import * as Tokens from '../tokens';

export default {
    title: 'AllTokens',
    parameters: {},
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
`;

const ColorBlock = styled.div<{ bgColor: string }>`
    border-radius: 2px;
    padding: 1rem;
    background-color: ${(p) => p.bgColor};
    display: inline;
    margin-left: 1rem;
`;

export const AllTokens = (): ReactElement => (
    <>
        <Typography pageTitle>All Tokens</Typography>

        {Object.entries(Tokens).map(([tokenName, tokenValue]) => {
            if (typeof tokenValue === 'object') return null;

            return (
                <Container key={tokenName}>
                    <Typography>
                        {tokenName}: {tokenValue}
                    </Typography>
                </Container>
            );
        })}
    </>
);

export const Color = (): ReactElement => (
    <>
        <Typography pageTitle>Color</Typography>

        {Object.entries(ColorTokens).map(([colorName, colorHexValue]) => (
            <Container key={colorName}>
                <Typography>
                    {colorName} - {colorHexValue.toLocaleUpperCase()}
                </Typography>
                <ColorBlock bgColor={colorHexValue} />
            </Container>
        ))}
    </>
);
