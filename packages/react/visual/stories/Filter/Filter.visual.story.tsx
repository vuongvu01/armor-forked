import React from 'react';

import {
    FilterLayout,
    FilterEditor,
    FilterViewer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '../../../src';
import { filterSchema, filterValue, conditionTypes } from './schema';

export default {
    title: 'Filter',
    component: FilterLayout,
};

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

export const Basic = () => (
    <FilterLayout
        tall
        filterEditor={
            <FilterEditor
                schema={filterSchema}
                types={conditionTypes}
                paddingTop={6}
                paddingLeft={2}
                paddingRight={6}
                paddingBottom={6}
            />
        }
    >
        <FilterViewer
            schema={filterSchema}
            types={conditionTypes}
            marginTop={6}
        />
        Table (or whatever) goes here
    </FilterLayout>
);

export const Open = () => (
    <FilterLayout
        tall
        filterOpen
        filterEditor={
            <FilterEditor
                schema={filterSchema}
                types={conditionTypes}
                paddingTop={6}
                paddingLeft={2}
                paddingRight={6}
                paddingBottom={6}
            />
        }
    >
        <FilterViewer
            schema={filterSchema}
            types={conditionTypes}
            marginTop={6}
        />
        Table (or whatever) goes here
    </FilterLayout>
);

export const Filled = () => (
    <FilterLayout
        tall
        filterOpen
        filterEditor={
            <FilterEditor
                schema={filterSchema}
                value={filterValue}
                types={conditionTypes}
                paddingTop={6}
                paddingLeft={2}
                paddingRight={6}
                paddingBottom={6}
            />
        }
    >
        <FilterViewer
            schema={filterSchema}
            types={conditionTypes}
            marginTop={6}
        />
        Table (or whatever) goes here
    </FilterLayout>
);

export const Applied = () => (
    <FilterLayout
        tall
        filterOpen
        filterEditor={
            <FilterEditor
                schema={filterSchema}
                value={filterValue}
                types={conditionTypes}
                paddingTop={6}
                paddingLeft={2}
                paddingRight={6}
                paddingBottom={6}
            />
        }
    >
        <FilterViewer
            schema={filterSchema}
            marginTop={6}
            value={filterValue}
            types={conditionTypes}
        />
        Table (or whatever) goes here
    </FilterLayout>
);

export const WithTable = () => (
    <FilterLayout
        tall
        filterOpen
        filterEditor={
            <FilterEditor
                schema={filterSchema}
                value={filterValue}
                types={conditionTypes}
                paddingTop={6}
                paddingLeft={2}
                paddingRight={6}
                paddingBottom={6}
            />
        }
    >
        <FilterViewer
            schema={filterSchema}
            marginTop={6}
            value={filterValue}
            types={conditionTypes}
        />
        <FilterTable />
    </FilterLayout>
);

export const FilterViewerWithResult = () => (
    <FilterViewer
        schema={filterSchema}
        marginTop={6}
        value={filterValue}
        types={conditionTypes}
        resultCount={8}
    />
);

export const FilterViewerWithResultAndTotalResult = () => (
    <FilterViewer
        schema={filterSchema}
        marginTop={6}
        value={filterValue}
        types={conditionTypes}
        resultCount={8}
        resultTotalCount={2500}
    />
);
