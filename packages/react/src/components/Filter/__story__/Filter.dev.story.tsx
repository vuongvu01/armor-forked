/* eslint-disable no-console,import/no-unresolved */

import React, { useCallback, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

import { FilterLayout } from '../FilterLayout';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../Table';
import { FilterConditionSchemaType, FilterConditionValueType } from '../type';
import {
    FilterViewer,
    FilterEditor,
    FilterDateConditionType,
    FilterEnumConditionType,
} from '../..';
import { useFilterURLStorage } from '../hooks';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Filter',
    component: FilterLayout,
    decorators: [withWrapper],
    parameters: {},
};

const araraFilterSchema: FilterConditionSchemaType = {
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

export const NoEditor = () => {
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
                schema={araraFilterSchema}
                value={filterValue}
                types={conditionTypes}
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
