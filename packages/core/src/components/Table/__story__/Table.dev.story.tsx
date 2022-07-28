/* eslint-disable no-console,import/no-unresolved */

import React, { FunctionComponent, useState, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteIcon } from '@deliveryhero/armor-icons';
import { ThemeProvider } from 'styled-components';
import {
    componentSpacing01,
    LEFT,
    RIGHT,
    makeTheme,
} from '@deliveryhero/armor-system';

import { Table } from '../Table';
import { TableHead } from '../TableHead';
import { TableCell as Cell } from '../TableCell';
import { TableBody as Body } from '../TableBody';
import { TableRow as Row } from '../TableRow';
import { demoData, getLargeDemoData } from './demoData';
import { EditableTableCell } from '../EditableTableCell';
import { Box } from '../../Box';
import { loremIpsum, LoremIpsum } from '../../../helpers/LoremIpsum';
import { TableAction } from '../TableAction';
import { Pack } from '../../Pack';
import { TableExpandableSection } from '../TableExpandableSection';
import { TableControllerCell } from '../TableControllerCell';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Table',
    component: Table,
    decorators: [withWrapper],
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

const BeautifulName: FunctionComponent<React.PropsWithChildren<unknown>> = ({
    children,
}) => <span>💞 {children} 💞</span>;

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
        <Box padding={5}>
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
        <Box>
            <Table
                maxWidth="70%"
                horizontalScroll
                stickyColumns={[
                    { index: 0, alignment: LEFT },
                    { index: 11, alignment: RIGHT },
                ]}
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
                            <Cell>
                                <Pack alignItems="center">
                                    <TableAction>
                                        <DeleteIcon
                                            margin={componentSpacing01}
                                        />
                                    </TableAction>
                                </Pack>
                            </Cell>
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

export const StickyColumnsAndCollapsable = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box>
            <Table
                maxWidth="70%"
                horizontalScroll
                stickyColumns={[
                    { index: 0, alignment: LEFT },
                    { index: 11, alignment: RIGHT },
                ]}
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
                        <>
                            <Row key={`${index}_data`}>
                                <Cell onClick={() => setExpanded(!expanded)}>
                                    {item.company}
                                </Cell>
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
                                <Cell>
                                    <Pack alignItems="center">
                                        <TableAction>
                                            <DeleteIcon
                                                margin={componentSpacing01}
                                            />
                                        </TableAction>
                                    </Pack>
                                </Cell>
                            </Row>
                            {index === 0 && (
                                <TableExpandableSection
                                    colSpan={12}
                                    expanded={expanded}
                                >
                                    {loremIpsum}
                                </TableExpandableSection>
                            )}
                        </>
                    ))}
                </Body>
            </Table>
        </Box>
    );
};

export const Collapsable = () => {
    const [expanded, setExpanded] = useState(false);

    const [content, setContent] = useState(loremIpsum);
    const increaseContent = useCallback(() => {
        setContent(`${content} 1111111111111`);
    }, [content]);

    return (
        <Box>
            <Table>
                <TableHead>
                    <Row>
                        <Cell>Food Companies</Cell>
                        <Cell>Scheme ID</Cell>
                        <Cell>City</Cell>
                        <Cell>Full Name</Cell>
                        <Cell>Actions</Cell>
                    </Row>
                </TableHead>
                <Body>
                    {largeDemoData.map((item, index) => (
                        <>
                            <Row key={`${index}_data`}>
                                {index === 0 && (
                                    <TableControllerCell
                                        onTriggerClick={() =>
                                            setExpanded(!expanded)
                                        }
                                        expanded={expanded}
                                    >
                                        {item.company}
                                    </TableControllerCell>
                                )}
                                {index !== 0 && <Cell>{item.company}</Cell>}
                                <Cell>{item.scheme}</Cell>
                                <Cell>{item.city}</Cell>
                                <Cell>{item.fullName}</Cell>
                                <Cell>
                                    <Pack alignItems="center">
                                        <TableAction>
                                            <DeleteIcon
                                                margin={componentSpacing01}
                                            />
                                        </TableAction>
                                    </Pack>
                                </Cell>
                            </Row>
                            {index === 0 && (
                                <TableExpandableSection
                                    colSpan={12}
                                    onClick={() => increaseContent()}
                                    expanded={expanded}
                                >
                                    {content}
                                </TableExpandableSection>
                            )}
                        </>
                    ))}
                </Body>
            </Table>
        </Box>
    );
};

const customTheme = makeTheme({
    armor: {
        components: {
            TableControllerCell: {
                borderWidth: '2px',
                borderColor: 'red',
            },
        },
    },
});

export const WithCustomTheme = () => (
    <ThemeProvider theme={customTheme}>
        <table>
            <tbody>
                <tr>
                    <TableControllerCell />
                </tr>
            </tbody>
        </table>
    </ThemeProvider>
);
