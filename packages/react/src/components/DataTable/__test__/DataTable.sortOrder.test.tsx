/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React from 'react';

import { cleanup, fireEvent, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { DataTable } from '../..';
import { dataSource, columns } from '../__story__/demoData';

describe('<DataTable />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should switch current sort order asc => desc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'desc']]);
    });

    it('should switch current sort order asc => desc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'desc']]);
    });

    it('should switch current sort order desc => unsorted, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order desc => unsorted, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([]);
    });

    it('should switch current sort order unsorted => asc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch current sort order unsorted => asc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch other field sort order asc => asc, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                defaultRowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector(
            'thead th[data-columnid="address"]',
        );

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['address', 'asc']]);
    });

    it('should switch other field sort order asc => asc, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                rowSortOrder={[['age', 'asc']]}
            />,
        );

        const cell = container.querySelector(
            'thead th[data-columnid="address"]',
        );

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['address', 'asc']]);
    });

    it('should switch current sort order desc => asc when enableNeutralRowSorting is set to false, [uncontrolled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                enableNeutralRowSorting={false}
                defaultRowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });

    it('should switch current sort order desc => asc when enableNeutralRowSorting is set to false, [controlled]', async () => {
        const onRowSortOrderChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                onRowSortOrderChange={onRowSortOrderChange}
                enableNeutralRowSorting={false}
                rowSortOrder={[['age', 'desc']]}
            />,
        );

        const cell = container.querySelector('thead th[data-columnid="age"]');

        fireEvent.click(cell!);
        expect(onRowSortOrderChange).toHaveBeenCalledWith([['age', 'asc']]);
    });
});
