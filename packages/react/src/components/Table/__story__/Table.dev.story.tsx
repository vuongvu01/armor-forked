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
import { TableCell as Cell } from '../TableCell';
import { TableBody as Body } from '../TableBody';
import { TableRow as Row } from '../TableRow';
import { demoData, getLargeDemoData } from './demoData';
import { EditableTableCell } from '../EditableTableCell';
import { Box } from '../../Box';
import { loremIpsum, LoremIpsum } from '../../../helpers/LoremIpsum';
import { TableCellLabel } from '../TableCellLabel';
import { componentSpacing06 } from '../../../tokens';

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
                    <Cell width="15rem">Full Name</Cell>
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
                        <Cell color="$color.neutral.05">
                            {/* todo: replace with <Pack /> later */}
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                height="24px"
                            >
                                <EditIcon marginRight={componentSpacing06} />
                                <DeleteIcon marginRight={componentSpacing06} />
                                <EllipsisVerticalIcon />
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
