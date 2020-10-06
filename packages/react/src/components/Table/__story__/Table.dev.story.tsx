/* eslint-disable no-console,import/no-unresolved */

import React, { FunctionComponent, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    EditIcon,
    DeleteIcon,
    EllipsisVerticalIcon,
} from '@deliveryhero/armor-icons';

import { Table } from '../Table';
import { TableHead } from '../TableHead';
import { TableHeadCell as HeadCell } from '../TableHeadCell';
import { TableCell as Cell } from '../TableCell';
import { TableBody as Body } from '../TableBody';
import { TableRow as Row } from '../TableRow';
import { TableAction as Action } from '../TableAction';
import { demoData, getLargeDemoData } from './demoData';
import { EditableTableCell } from '../EditableTableCell';
import { Box } from '../../Box';
import { loremIpsum, LoremIpsum } from '../../../helpers/LoremIpsum';
import { TableCellLabel } from '../TableCellLabel';
import { componentSpacing06 } from '../../../tokens';
import { TableRowSortOrderType } from '../type';

export default {
    title: 'Components/Table',
    component: Table,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    return (
        <Table>
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                <Row>
                    <Cell>Kitchen Garden POS</Cell>
                    <Cell>Scheme B</Cell>
                    <Cell>Kano</Cell>
                    <Cell>Slavcho Karbashewski</Cell>
                    <Cell>42</Cell>
                    <Cell>695-615-8635</Cell>
                </Row>
                <Row>
                    <Cell>KFC HK</Cell>
                    <Cell>Scheme F</Cell>
                    <Cell>Gothenburg</Cell>
                    <Cell>Emlen Beaver</Cell>
                    <Cell>46</Cell>
                    <Cell>998-703-1496</Cell>
                </Row>
                <Row>
                    <Cell>Foodstory</Cell>
                    <Cell>Scheme E</Cell>
                    <Cell>Xian</Cell>
                    <Cell>Akumjeli Akuchi</Cell>
                    <Cell>26</Cell>
                    <Cell>150-204-0817</Cell>
                </Row>
            </Body>
        </Table>
    );
};

const BeautifulName: FunctionComponent = ({ children }) => (
    <span>💞 {children} 💞</span>
);

export const EditableCells = () => {
    const [edit, setEdit] = useState(false);
    return (
        <Table>
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                {demoData.map((item, index) => (
                    <Row key={index}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <EditableTableCell
                            defaultValue={item.fullName}
                            onChange={(value: any) => console.log(value)}
                        >
                            <BeautifulName>{item.fullName}</BeautifulName>
                        </EditableTableCell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};

export const WideTable = () => {
    return (
        <Table wide>
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                {demoData.map((item, index) => (
                    <Row key={index}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};

const { data: largeDemoData, keys: dataKeys } = getLargeDemoData(7);

export const StickyHeader = () => {
    return (
        <Box padding={5} style={{ backgroundColor: '#fbfbfb' }}>
            <LoremIpsum />
            <Table stickyHead>
                <TableHead>
                    <Row>
                        <Cell>Food Companies</Cell>
                        <Cell>Scheme ID</Cell>
                        <Cell>City</Cell>
                        <Cell>Full Name</Cell>
                        <Cell>ID</Cell>
                        <Cell>Phone number</Cell>
                    </Row>
                </TableHead>
                <Body>
                    {largeDemoData.map((item, index) => (
                        <Row key={index}>
                            <Cell>{item.company}</Cell>
                            <Cell>{item.scheme}</Cell>
                            <Cell>{item.city}</Cell>
                            <Cell>{item.fullName}</Cell>
                            <Cell>{item.id}</Cell>
                            <Cell>{item.phoneNumber}</Cell>
                        </Row>
                    ))}
                </Body>
            </Table>
            <LoremIpsum />
            <LoremIpsum />
        </Box>
    );
};

export const StickyColumns = () => {
    return (
        <Box style={{ backgroundColor: '#fbfbfb' }}>
            <Table
                maxWidth="70%"
                horizontalScroll
                stickyLeftColumn
                stickyRightColumn
            >
                <TableHead>
                    <Row>
                        <Cell>Food Companies</Cell>
                        <Cell>Scheme ID</Cell>
                        <Cell>City</Cell>
                        <Cell>Full Name</Cell>
                        <Cell>ID</Cell>
                        <Cell>Phone number</Cell>
                        <Cell>Food Companies</Cell>
                        <Cell>Scheme ID</Cell>
                        <Cell>City</Cell>
                        <Cell>Full Name</Cell>
                        <Cell>ID</Cell>
                        <Cell>Actions</Cell>
                    </Row>
                </TableHead>
                <Body>
                    {largeDemoData.map((item, index) => (
                        <Row key={index}>
                            <Cell>{item.company}</Cell>
                            <Cell>{item.scheme}</Cell>
                            <Cell>{item.city}</Cell>
                            <Cell>{item.fullName}</Cell>
                            <Cell>{item.id}</Cell>
                            <Cell>{item.phoneNumber}</Cell>
                            <Cell>{item.company}</Cell>
                            <Cell>{item.scheme}</Cell>
                            <Cell>{item.city}</Cell>
                            <Cell>{item.fullName}</Cell>
                            <Cell>{item.id}</Cell>
                            <Cell>Actions!</Cell>
                        </Row>
                    ))}
                </Body>
            </Table>
        </Box>
    );
};

export const MergeCells = () => {
    return (
        <Table>
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                <Row>
                    <Cell>Kitchen Garden POS</Cell>
                    <Cell rowSpan={2}>Scheme B</Cell>
                    <Cell colSpan={2}>Kano</Cell>
                    <Cell>42</Cell>
                    <Cell>695-615-8635</Cell>
                </Row>
                <Row>
                    <Cell>KFC HK</Cell>
                    <Cell>Gothenburg</Cell>
                    <Cell>Emlen Beaver</Cell>
                    <Cell>46</Cell>
                    <Cell>998-703-1496</Cell>
                </Row>
                <Row>
                    <Cell>Foodstory</Cell>
                    <Cell>Scheme E</Cell>
                    <Cell>Xian</Cell>
                    <Cell>Akumjeli Akuchi</Cell>
                    <Cell>26</Cell>
                    <Cell>150-204-0817</Cell>
                </Row>
            </Body>
        </Table>
    );
};

export const SelectableRows = () => {
    const [selectedRowIds, setSelectedRowIds] = useState<(string | number)[]>([
        'b',
    ]);

    return (
        <Table
            rowIds={['a', 'b', 'c']}
            selectedRowIds={selectedRowIds}
            onRowSelectionChange={setSelectedRowIds}
        >
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                {demoData.map(item => (
                    <Row key={item.key} rowId={item.key}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};

const largeDemoData1 = getLargeDemoData(10);

export const SelectableRowsAndStickyColumns = () => {
    const [selectedRowIds, setSelectedRowIds] = useState<(string | number)[]>(
        [],
    );

    return (
        <Table
            rowIds={largeDemoData1.keys}
            selectedRowIds={selectedRowIds}
            onRowSelectionChange={setSelectedRowIds}
            maxWidth="70%"
            horizontalScroll
            stickyLeftColumn
            stickyRightColumn
        >
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>
                        <TableCellLabel>
                            Scheme ID <EditIcon marginLeft={3} />
                        </TableCellLabel>
                    </Cell>
                    <Cell>
                        <TableCellLabel>
                            City <EllipsisVerticalIcon marginLeft={3} />
                        </TableCellLabel>
                    </Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                    <Cell>Actions</Cell>
                </Row>
            </TableHead>
            <Body>
                {largeDemoData1.data.map(item => (
                    <Row key={item.key} rowId={item.key}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                        <Cell>
                            {/* todo: replace with <Pack /> later */}
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                height="24px"
                            >
                                <Action marginRight={componentSpacing06}>
                                    <EditIcon />
                                </Action>
                                <Action marginRight={componentSpacing06}>
                                    <DeleteIcon />
                                </Action>
                                <Action>
                                    <EllipsisVerticalIcon />
                                </Action>
                            </Box>
                        </Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};

export const SelectableRowsAndStickyHeader = () => {
    const [selectedRowIds, setSelectedRowIds] = useState<(string | number)[]>(
        [],
    );

    return (
        <Table
            rowIds={largeDemoData1.keys}
            selectedRowIds={selectedRowIds}
            onRowSelectionChange={setSelectedRowIds}
            stickyHead
        >
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                    <Cell>Actions</Cell>
                </Row>
            </TableHead>
            <Body>
                {largeDemoData1.data.map(item => (
                    <Row key={item.key} rowId={item.key}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                        <Cell>Actions!</Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};

export const DisabledCells = () => {
    return (
        <Table>
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell>Scheme ID</Cell>
                    <Cell disabled>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                <Row>
                    <Cell>Kitchen Garden POS</Cell>
                    <Cell disabled>Scheme B</Cell>
                    <Cell>Kano</Cell>
                    <Cell disabled>Slavcho Karbashewski</Cell>
                    <Cell>42</Cell>
                    <Cell>695-615-8635</Cell>
                </Row>
                <Row>
                    <Cell disabled>KFC HK</Cell>
                    <Cell>Scheme F</Cell>
                    <Cell>Gothenburg</Cell>
                    <Cell>Emlen Beaver</Cell>
                    <Cell disabled>46</Cell>
                    <Cell>998-703-1496</Cell>
                </Row>
                <Row>
                    <Cell>Foodstory</Cell>
                    <Cell>Scheme E</Cell>
                    <Cell>Xian</Cell>
                    <Cell>Akumjeli Akuchi</Cell>
                    <Cell>26</Cell>
                    <Cell disabled>150-204-0817</Cell>
                </Row>
            </Body>
        </Table>
    );
};

export const WithEllipsis = () => {
    return (
        <Table width="100%">
            <TableHead>
                <Row>
                    <Cell>Food Companies</Cell>
                    <Cell width="16%">Scheme ID</Cell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <Cell>ID</Cell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                <Row>
                    <Cell>Kitchen Garden POS</Cell>
                    <Cell ellipsis width="16%">
                        <span>{loremIpsum}</span>
                    </Cell>
                    <Cell>Kano</Cell>
                    <Cell>kkkk</Cell>
                    <Cell>42</Cell>
                    <Cell>695-615-8635</Cell>
                </Row>
                <Row>
                    <Cell>1111</Cell>
                    <Cell>Scheme F</Cell>
                    <Cell>Gothenburg</Cell>
                    <Cell>Emlen Beaver</Cell>
                    <Cell>Bar</Cell>
                    <Cell>998-703-1496</Cell>
                </Row>
                <Row>
                    <Cell>Foodstory</Cell>
                    <Cell>Scheme E</Cell>
                    <Cell>Xian</Cell>
                    <Cell>Akumjeli Akuchi</Cell>
                    <Cell>26</Cell>
                    <Cell>FFFooo</Cell>
                </Row>
            </Body>
        </Table>
    );
};

const getSortingFunction = (field: string) => {
    if (field !== 'id') {
        return (
            valueA: string | number,
            valueB: string | number,
            way: 'asc' | 'desc',
        ) => {
            return way === 'asc'
                ? valueA.toString().localeCompare(valueB.toString())
                : valueB.toString().localeCompare(valueA.toString());
        };
    }

    return (
        valueA: string | number,
        valueB: string | number,
        way: 'asc' | 'desc',
    ) => {
        if (valueA > valueB) {
            return way === 'asc' ? 1 : -1;
        }

        if (valueA < valueB) {
            return way === 'asc' ? -1 : 1;
        }

        return 0;
    };
};

export const WithSorting = () => {
    const [rowSortOrder, setRowSortOrder] = useState<TableRowSortOrderType>([
        ['foodCompanies', 'asc'],
    ]);

    const [data, setData] = useState<typeof demoData>(demoData);

    return (
        <Table
            rowSortOrder={rowSortOrder}
            onRowSortOrderChange={newWorldOrder => {
                if (newWorldOrder.length) {
                    const field = newWorldOrder[0][0];
                    const order = newWorldOrder[0][1];

                    const sortingFunction = getSortingFunction(field as string);

                    setData(
                        [...demoData].sort((a, b) => {
                            // @ts-ignore
                            const valueA = a[field];
                            // @ts-ignore
                            const valueB = b[field];
                            return sortingFunction(valueA, valueB, order);
                        }),
                    );
                } else {
                    // unsorted
                    setData(demoData);
                }

                setRowSortOrder(newWorldOrder);
            }}
        >
            <TableHead>
                <Row>
                    <HeadCell columnId="company" sortable>
                        Food Companies
                    </HeadCell>
                    <HeadCell
                        columnId="scheme"
                        sortable
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        Scheme ID
                    </HeadCell>
                    <Cell>City</Cell>
                    <Cell>Full Name</Cell>
                    <HeadCell columnId="id" sortable sortType="numerical">
                        ID
                    </HeadCell>
                    <Cell>Phone number</Cell>
                </Row>
            </TableHead>
            <Body>
                {data.map(item => (
                    <Row key={item.key} rowId={item.key}>
                        <Cell>{item.company}</Cell>
                        <Cell>{item.scheme}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.fullName}</Cell>
                        <Cell>{item.id}</Cell>
                        <Cell>{item.phoneNumber}</Cell>
                    </Row>
                ))}
            </Body>
        </Table>
    );
};
