import React, { FunctionComponent, useMemo } from 'react';
import { makeBEM } from '@deliveryhero/armor-system';

import { Props } from './type';
import { Table, HeaderTR, TH, TR, TBody, TD } from './style';

export const Nodes: FunctionComponent<Props> = ({ blockName, nodes }) => {
    const columns = useMemo(() => {
        return [
            {
                element: 'Root',
                description: 'Root element',
                className: makeBEM(blockName, 'Root'),
            },
            ...nodes.map(node => {
                return {
                    description: '-',
                    className: makeBEM(blockName, node.element, node.modifier),
                    ...node,
                };
            }),
        ];
    }, [blockName, nodes]);

    return (
        <Table>
            <thead>
                <HeaderTR>
                    <TH>Node name</TH>
                    <TH>CSS selector</TH>
                    <TH style={{ width: '40%' }}>Description</TH>
                </HeaderTR>
            </thead>
            <TBody>
                {columns.map(column => (
                    <TR key={column.className}>
                        <TD>{column.element}</TD>
                        <TD>.{column.className}</TD>
                        <TD>{column.description}</TD>
                    </TR>
                ))}
            </TBody>
        </Table>
    );
};

Nodes.defaultProps = {
    nodes: [],
};
