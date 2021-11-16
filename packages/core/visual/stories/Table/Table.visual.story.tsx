import React, { useRef, useEffect } from 'react';
import { EditIcon } from '@deliveryhero/armor-icons';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableFoot,
    TableCellLabel,
    TableControllerCell,
    TableExpandableSection,
    TableHeadCell,
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

export const NoWrapCell = () => (
    <div style={{ width: '400px' }}>
        <Table width="100%">
            <TableHead>
                <TableRow>
                    <TableCell width="40%">One</TableCell>
                    <TableHeadCell>
                        Contact information is here and there and over there
                    </TableHeadCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <TableCell width="40%">One</TableCell>
                    <TableHeadCell enableContentWrap>
                        Contact information is here and there and over there
                    </TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Cell text</TableCell>
                    <TableCell>
                        Contact information is here and there and over there
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export const TriggerCell = () => (
    <Table>
        <TableFoot>
            <TableRow>
                <TableControllerCell width="10rem">
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableRow>
                <TableControllerCell width="10rem" expanded>
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
        </TableFoot>
    </Table>
);

export const ExpandableSection = () => (
    <Table>
        <TableFoot>
            <TableRow>
                <TableControllerCell width="10rem">
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableExpandableSection colSpan={2}>
                Hidden forever
            </TableExpandableSection>
            <TableRow>
                <TableControllerCell width="10rem" expanded>
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableExpandableSection expanded colSpan={2}>
                Ready and waiting
            </TableExpandableSection>
            <TableRow>
                <TableControllerCell width="10rem" expanded>
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableExpandableSection
                expanded
                enableDefaultPadding={false}
                colSpan={2}
            >
                No padding have I
            </TableExpandableSection>
            <TableRow>
                <TableControllerCell width="10rem" expanded>
                    Cell text
                </TableControllerCell>
                <TableCell width="10rem">Cell text</TableCell>
            </TableRow>
            <TableExpandableSection expanded colSpan={2} offsetLeft={10}>
                Arbitrary left offset
            </TableExpandableSection>
        </TableFoot>
    </Table>
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
