import React, { useRef, useEffect } from 'react';
import { EditIcon } from '@deliveryhero/armor-icons';

import {
    Table,
    TableBody,
    TableCell,
    TableHeadCell,
    TableHead,
    TableRow,
    TableFoot,
    TableCellLabel,
} from '../../../src/components';
import { loremIpsum } from '../../../src/helpers/LoremIpsum';

export default {
    title: 'Table',
    component: Table,
};

export const HeaderCell = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableHead>
    </Table>
);

export const HeaderCellWithIcon = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell width="10rem">
                    <TableCellLabel>
                        Cell text
                        <EditIcon marginLeft={2} />
                    </TableCellLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    </Table>
);

export const BodyCell = () => (
    <Table>
        <TableBody>
            <TableRow>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const FooterCell = () => (
    <Table>
        <TableFoot>
            <TableRow>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableFoot>
    </Table>
);

export const CellDisabled = () => (
    <Table>
        <TableBody>
            <TableRow>
                <TableCell width="10rem" disabled>
                    Cell text
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const CellBorder = () => (
    <Table>
        <TableFoot>
            <TableRow>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableFoot>
    </Table>
);

export const MultiLineCells = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>
                    Cell text
                    <br />
                    Cell text
                    <br />
                    Cell text
                    <br />
                    Cell text
                    <br />
                    Cell text
                    <br />
                    Cell text
                    <br />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const EllipsisCells = () => (
    <div style={{ width: '400px' }}>
        <Table width="100%">
            <TableHead>
                <TableRow>
                    <TableCell width="40%">One</TableCell>
                    <TableCell>Two</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell ellipsis>{loremIpsum}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export const CellAlignmentAndSize = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell width="20rem">One</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow height="10rem">
                <TableCell contentAlignX="left" contentAlignY="top">
                    Cell text
                </TableCell>
            </TableRow>
            <TableRow height="10rem">
                <TableCell contentAlignX="center" contentAlignY="center">
                    Cell text
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    height="10rem"
                    contentAlignX="right"
                    contentAlignY="bottom"
                >
                    Cell text
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const TableWithCheckboxNothingChecked = () => (
    <Table rowIds={['one', 'two']} selectedRowIds={[]}>
        <TableHead>
            <TableRow>
                <TableCell>Hello</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow rowId="one">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableRow rowId="two">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const TableWithCheckboxSomeChecked = () => (
    <Table rowIds={['one', 'two']} selectedRowIds={['one']}>
        <TableHead>
            <TableRow>
                <TableCell>Hello</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow rowId="one">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableRow rowId="two">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const TableWithCheckboxAllChecked = () => (
    <Table rowIds={['one', 'two']} selectedRowIds={['one', 'two']}>
        <TableHead>
            <TableRow>
                <TableCell>Hello</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow rowId="one">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableRow rowId="two">
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const WideTable = () => (
    <Table wide>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const HorizontallyScrolledTable = () => (
    <Table maxWidth="38rem" horizontalScroll>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
                <TableCell>Three</TableCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    Cell text Cell text Cell text Cell text Cell text Cell text
                    Cell text
                </TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const StickyRightColumn = () => (
    <Table maxWidth="38rem" horizontalScroll stickyRightColumn>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
                <TableCell>Three</TableCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    Cell text Cell text Cell text Cell text Cell text Cell text
                    Cell text
                </TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const StickyRightColumnInvisible = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 9999999;
        }
    }, []);

    return (
        <Table maxWidth="38rem" horizontalScroll stickyRightColumn ref={ref}>
            <TableHead>
                <TableRow>
                    <TableCell>One</TableCell>
                    <TableCell>Two</TableCell>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                    <TableCell>Five</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Cell text Cell text Cell text Cell text Cell text Cell
                        text Cell text
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const StickyLeftColumnInvisible = () => (
    <Table maxWidth="38rem" horizontalScroll stickyLeftColumn>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
                <TableCell>Three</TableCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    Cell text Cell text Cell text Cell text Cell text Cell text
                    Cell text
                </TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const StickyLeftColumn = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 200;
        }
    }, []);

    return (
        <Table maxWidth="38rem" horizontalScroll stickyLeftColumn ref={ref}>
            <TableHead>
                <TableRow>
                    <TableCell>One</TableCell>
                    <TableCell>Two</TableCell>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                    <TableCell>Five</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Cell text Cell text Cell text Cell text Cell text Cell
                        text Cell text
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const StickyLeftColumnWithCheckboxes = () => {
    const ref = useRef();
    useEffect(() => {
        const table = ref.current;
        if (table) {
            // @ts-ignore
            table.scrollLeft = 200;
        }
    }, []);

    return (
        <Table
            maxWidth="38rem"
            horizontalScroll
            stickyLeftColumn
            ref={ref}
            rowIds={['one', 'two', 'three']}
            selectedRowIds={['one']}
        >
            <TableHead>
                <TableRow>
                    <TableCell>One</TableCell>
                    <TableCell>Two</TableCell>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                    <TableCell>Five</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow rowId="one">
                    <TableCell>
                        Cell text Cell text Cell text Cell text Cell text Cell
                        text Cell text
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow rowId="two">
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow rowId="three">
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const StickyHeaderOnWindowScroll = () => {
    useEffect(() => {
        window.scrollTo(0, 300);
    }, []);

    return (
        <Table maxHeight="15rem" stickyHead>
            <TableHead>
                <TableRow>
                    <TableCell>One</TableCell>
                    <TableCell>Two</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                        Cell text
                        <br />
                    </TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>Cell text</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const RowSpanned = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
                <TableCell>Three</TableCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell rowSpan={2}>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell rowSpan={2}>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell rowSpan={2}>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const ColSpanned = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>One</TableCell>
                <TableCell>Two</TableCell>
                <TableCell>Three</TableCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell colSpan={2}>Cell text</TableCell>
                <TableCell colSpan={2}>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
                <TableCell>Cell text</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const SortingAsc = () => (
    <Table rowSortOrder={[['one', 'asc']]}>
        <TableHead>
            <TableRow>
                <TableHeadCell columnId="one" sortable>
                    One
                </TableHeadCell>
                <TableHeadCell columnId="two" sortable>
                    Two
                </TableHeadCell>
                <TableHeadCell>Three</TableHeadCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>New York</TableCell>
                <TableCell>London</TableCell>
                <TableCell>Amsterdam</TableCell>
                <TableCell>Helsinki</TableCell>
                <TableCell>Munich</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Berlin</TableCell>
                <TableCell>Moscow</TableCell>
                <TableCell>Mexico</TableCell>
                <TableCell>Vienna</TableCell>
                <TableCell>Venice</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const SortingDesc = () => (
    <Table rowSortOrder={[['one', 'desc']]}>
        <TableHead>
            <TableRow>
                <TableHeadCell columnId="one" sortable>
                    One
                </TableHeadCell>
                <TableHeadCell columnId="two" sortable>
                    Two
                </TableHeadCell>
                <TableHeadCell>Three</TableHeadCell>
                <TableCell>Four</TableCell>
                <TableCell>Five</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>New York</TableCell>
                <TableCell>London</TableCell>
                <TableCell>Amsterdam</TableCell>
                <TableCell>Helsinki</TableCell>
                <TableCell>Munich</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Berlin</TableCell>
                <TableCell>Moscow</TableCell>
                <TableCell>Mexico</TableCell>
                <TableCell>Vienna</TableCell>
                <TableCell>Venice</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);
