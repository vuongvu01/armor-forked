/* eslint-disable no-console,import/no-unresolved */

import React, { useCallback, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

import { FilterLayout } from '../FilterLayout';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../Table';
import {
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueElementType,
    FilterConditionValueType,
    FilterConditionValueElementOrGroupType,
} from '../type';
import {
    FilterViewer,
    FilterEditor,
    FilterDateConditionType,
    FilterEnumConditionType,
    Link,
    ContextMenu,
} from '../..';
import { useFilterURLStorage } from '../hooks';
import { withWrapper } from '../../../helpers/Wrapper';
import { OptionObjectType } from '../../OptionList/type';

export default {
    title: 'Components/Filter',
    component: FilterLayout,
    decorators: [withWrapper],
    parameters: {},
};

const araraFilterSchema: FilterConditionSchemaElementOrGroupType = {
    conditions: [
        {
            id: 'name',
            label: 'Name',
        },
        {
            id: 'email',
            label: 'Email',
        },
        {
            id: 'phoneNumber',
            label: 'Phone number',
        },
        {
            id: 'status',
            label: 'Status',
            typeId: 'statusEnum',
        },
        {
            id: 'landedAt',
            label: 'Landed at',
            typeId: 'landedAtDate',
        },
        {
            id: 'labels',
            label: 'Labels',
            typeId: 'labelEnum',
            multiple: true,
        },
    ],
};

const conditionTypes = [
    FilterEnumConditionType.create('labelEnum', {
        options: [
            { label: 'Label 1', value: 'label1' },
            { label: 'Label 2', value: 'label2' },
            { label: 'Label 3', value: 'label3' },
        ],
    }),
    FilterEnumConditionType.create('statusEnum', {
        options: [
            { label: 'Document Collection', value: 'doc_collection' },
            { label: 'Document Processing', value: 'doc_processing' },
            { label: 'Document Rejection', value: 'doc_rejection' },
        ],
    }),
    FilterDateConditionType.create('landedAtDate', {
        formatDateTime: (value: unknown) =>
            format(
                value instanceof Date ? value : new Date(value as string),
                'hh:mm dd.MM.yyyy',
            ),
        enableTimePicker: true,
    }),
];

const FilterTable = () => {
    return (
        <Table marginY={6} wide>
            <TableHead>
                <TableRow>
                    <TableCell>Food Companies</TableCell>
                    <TableCell>Scheme ID</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Phone number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Kitchen Garden POS</TableCell>
                    <TableCell>Scheme B</TableCell>
                    <TableCell>Kano</TableCell>
                    <TableCell>Slavcho Karbashewski</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>695-615-8635</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>KFC HK</TableCell>
                    <TableCell>Scheme F</TableCell>
                    <TableCell>Gothenburg</TableCell>
                    <TableCell>Emlen Beaver</TableCell>
                    <TableCell>46</TableCell>
                    <TableCell>998-703-1496</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Foodstory</TableCell>
                    <TableCell>Scheme E</TableCell>
                    <TableCell>Xian</TableCell>
                    <TableCell>Akumjeli Akuchi</TableCell>
                    <TableCell>26</TableCell>
                    <TableCell>150-204-0817</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export const Basic = () => {
    const [storedValue, setStoredValue] = useFilterURLStorage('filterA');
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >(storedValue);
    const [open, setOpen] = useState(false);

    const setFilterValueCommon = useCallback(
        (value: FilterConditionValueType) => {
            setStoredValue(value);
            setFilterValue(value);
        },
        [],
    );

    return (
        <FilterLayout
            tall
            filterOpen={open}
            filterEditor={
                <FilterEditor
                    schema={araraFilterSchema}
                    value={filterValue}
                    types={conditionTypes}
                    onValueChange={setFilterValueCommon}
                    onClose={() => setOpen(false)}
                    paddingTop={6}
                    paddingLeft={2}
                    paddingRight={6}
                    paddingBottom={6}
                />
            }
        >
            <FilterViewer
                schema={araraFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValueCommon}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
                resultCount={8}
                resultTotalCount={2500}
            />
            <FilterTable />
        </FilterLayout>
    );
};

const enumFilterSchema: FilterConditionSchemaElementOrGroupType = {
    conditions: [
        {
            id: 'labels',
            label: 'Labels',
            typeId: 'labelEnum',
            multiple: true,
        },
    ],
};

const enumConditionTypes = [
    FilterEnumConditionType.create('labelEnum', {
        options: [
            { label: 'Label 1', value: 'label1', price: 9999 },
            { label: 'Label 2', value: 'label2', price: 123 },
            { label: 'Label 3', value: 'label3', price: 78965 },
        ],
        dropdownAttributes: {
            enableSearchOption: true,
            renderItemAdditionalInfo: item =>
                new Intl.NumberFormat().format(
                    (item as OptionObjectType).price,
                ),
        },
    }),
];

export const EnumProps = () => {
    const [storedValue, setStoredValue] = useFilterURLStorage('filterA');
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >(storedValue);

    const setFilterValueCommon = useCallback(
        (value: FilterConditionValueType) => {
            setStoredValue(value);
            setFilterValue(value);
        },
        [],
    );

    return (
        <FilterLayout tall>
            <FilterEditor
                schema={enumFilterSchema}
                value={filterValue}
                types={enumConditionTypes}
                onValueChange={setFilterValueCommon}
                enableCloseButton={false}
                paddingTop={6}
                layout="horizontal"
                resultCount={10}
                resultTotalCount={2500}
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const SideSheet = () => {
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >();
    const [open, setOpen] = useState(false);

    return (
        <FilterLayout
            tall
            filterOpen={open}
            onFilterOpenChange={setOpen}
            filterEditor={
                <FilterEditor
                    schema={araraFilterSchema}
                    value={filterValue}
                    types={conditionTypes}
                    onValueChange={setFilterValue}
                    onClose={() => setOpen(false)}
                />
            }
            filterEditorPlacement="sideSheet"
        >
            <FilterViewer
                schema={araraFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValue}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
                resultCount={8}
                resultTotalCount={2500}
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const NoTopLine = () => {
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >();

    return (
        <FilterLayout tall enableTopSeparator={false}>
            <FilterEditor
                schema={enumFilterSchema}
                value={filterValue}
                types={enumConditionTypes}
                onValueChange={setFilterValue}
                enableCloseButton={false}
                paddingTop={6}
                layout="horizontal"
                resultCount={10}
                resultTotalCount={2500}
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const ClearableFalse = () => {
    const localFilterSchema: FilterConditionSchemaElementOrGroupType = {
        conditions: [
            {
                id: 'name',
                label: 'Name',
                removable: false,
            },
            {
                id: 'email',
                label: 'Email',
            },
        ],
    };

    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >({
        conditions: [
            { id: 'name', name: 'name', value: 'Smirnoff' },
            { id: 'email', name: 'email', value: 'smirnoff@gmail.com' },
        ],
    });
    const [open, setOpen] = useState(false);

    return (
        <FilterLayout
            filterOpen={open}
            onFilterOpenChange={setOpen}
            filterEditor={
                <FilterEditor
                    schema={localFilterSchema}
                    value={filterValue}
                    types={conditionTypes}
                    onValueChange={setFilterValue}
                    onClose={() => setOpen(false)}
                    paddingTop={6}
                    paddingLeft={2}
                    paddingRight={6}
                    paddingBottom={6}
                />
            }
        >
            <FilterViewer
                schema={localFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValue}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
                resultCount={8}
                resultTotalCount={2500}
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const WithActions = () => {
    const menuElements = [
        {
            id: 'edit',
            label: 'Edit',
            props: { 'data-elementid': 'edit', onClick: () => {} },
        },
        {
            id: 'delete',
            label: 'Delete',
            props: {
                'data-elementid': 'delete',
                onClick: () => {},
                selected: true,
            },
        },
    ];

    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >({
        conditions: [{ id: 'name', name: 'name', value: 'Smirnoff' }],
    });
    const [open, setOpen] = useState(false);

    return (
        <FilterLayout filterOpen={open} onFilterOpenChange={setOpen}>
            <FilterViewer
                schema={araraFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValue}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
                resultCount={8}
                resultTotalCount={2500}
                filterActions={
                    <>
                        <ContextMenu
                            trigger={<Link>More...</Link>}
                            align="bottom-end"
                            menuElements={menuElements}
                            width={30}
                        />
                    </>
                }
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const DontCloseOnApply = () => {
    const [open, setOpen] = useState(true);
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >();

    return (
        <FilterLayout
            filterOpen={open}
            onFilterOpenChange={setOpen}
            filterEditor={
                <FilterEditor
                    schema={araraFilterSchema}
                    onClose={() => setOpen(false)}
                    paddingTop={6}
                    paddingLeft={2}
                    paddingRight={6}
                    paddingBottom={6}
                    enableCloseOnApply={false}
                    value={filterValue}
                    onValueChange={setFilterValue}
                />
            }
        >
            <FilterViewer
                schema={araraFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValue}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
            />
            <FilterTable />
        </FilterLayout>
    );
};

export const FieldDependency = () => {
    const [open, setOpen] = useState(true);
    const [filterValue, setFilterValue] = useState<
        FilterConditionValueType | undefined
    >();

    const [candyVisibility, setCandyVisibility] = useState(false);

    const localFilterSchema: FilterConditionSchemaElementOrGroupType = {
        conditions: [
            {
                id: 'message',
                label: 'Type "candy" to see 2nd field',
                removable: false,
            },
            ...(candyVisibility
                ? [
                      {
                          id: 'candy',
                          label: 'Candy',
                      },
                  ]
                : []),
        ],
    };

    return (
        <FilterLayout
            filterOpen={open}
            onFilterOpenChange={setOpen}
            filterEditor={
                <FilterEditor
                    schema={localFilterSchema}
                    onClose={() => setOpen(false)}
                    paddingTop={6}
                    paddingLeft={2}
                    paddingRight={6}
                    paddingBottom={6}
                    enableCloseOnApply={false}
                    value={filterValue}
                    onValueChange={setFilterValue}
                    onValueCandidateChange={valueCandidate => {
                        if (valueCandidate && valueCandidate.conditions) {
                            const val = valueCandidate.conditions![0].value;
                            setCandyVisibility(val === 'candy');
                        }
                    }}
                />
            }
        >
            <FilterViewer
                schema={localFilterSchema}
                value={filterValue}
                types={conditionTypes}
                onValueChange={setFilterValue}
                marginTop={6}
                onFilterOpenButtonClick={() => setOpen(true)}
                filterOpen={open}
            />
            <FilterTable />
        </FilterLayout>
    );
};
