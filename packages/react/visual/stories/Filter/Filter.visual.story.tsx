import React from 'react';

import { FilterLayout, FilterEditor, FilterViewer } from '../../../src';
import { filterSchema, filterValue, conditionTypes } from './schema';

export default {
    title: 'Filter',
    component: FilterLayout,
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
