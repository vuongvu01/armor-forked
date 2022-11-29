import React, { ReactElement } from 'react';
import styled from 'styled-components';

import {
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@deliveryhero/armor';
import { Color as ColorTokens } from '../tokens';
import * as Tokens from '../tokens';

export default {
    title: 'AllTokens',
    parameters: {},
};

const ColorBlock = styled.div<{ bgColor: string }>`
    padding: 1rem;
    background-color: ${(p) => p.bgColor};
`;

export const AllTokens = (): ReactElement => (
    <>
        <Typography pageTitle>All Tokens</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Display</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.entries(Tokens).map(([tokenName, tokenValue]) => {
                    if (typeof tokenValue === 'object') return null;

                    const isColorToken = Boolean(
                        (ColorTokens as Record<string, string>)[tokenName],
                    );

                    return (
                        <TableRow key={tokenName}>
                            <TableCell>${tokenName}</TableCell>
                            <TableCell>
                                {typeof tokenValue === 'string'
                                    ? `"${tokenValue}"`
                                    : tokenValue}
                            </TableCell>
                            <TableCell>
                                {isColorToken && (
                                    <ColorBlock bgColor={`${tokenValue}`} />
                                )}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </>
);
