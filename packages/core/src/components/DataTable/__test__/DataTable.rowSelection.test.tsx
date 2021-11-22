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
import { ScalarType } from '@deliveryhero/armor-system';

import { DataTable } from '../..';
import { dataSource, columns } from '../__story__/demoData';

describe('<DataTable />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    const expectToBeInState = (
        checked: boolean,
        container: HTMLElement,
        rowId?: ScalarType,
    ) => {
        const input = container.querySelector(
            rowId ? `td[data-rowid="${rowId}"] input` : 'th input',
        );
        expect(input).toBeInTheDocument();
        if (checked) {
            expect(input).toHaveAttribute('checked');
        } else {
            expect(input).not.toHaveAttribute('checked');
        }
    };

    it('should display row selectors: [2] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [2] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [1, 3] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 3] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 2, 3] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [1, 2, 3] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '2', '3']}
            />,
        );

        expectToBeInState(true, container);
        expectToBeInState(true, container, '1');
        expectToBeInState(true, container, '2');
        expectToBeInState(true, container, '3');
    });

    it('should display row selectors: [] [uncontrolled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
            />,
        );

        expectToBeInState(false, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should display row selectors: [] [controlled]', async () => {
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={[]}
            />,
        );

        expectToBeInState(false, container);
        expectToBeInState(false, container, '1');
        expectToBeInState(false, container, '2');
        expectToBeInState(false, container, '3');
    });

    it('should change row selection by click on the row selector [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector(`td[data-rowid="1"] input`);
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);

        // in un-controlled case clicking on the selected row deselects it
        onSelectionChange.mockReset();
        const td = container.querySelector(`td[data-rowid="1"]`);
        fireEvent.click(td!);
        expect(onSelectionChange).toHaveBeenCalledWith(['2']);
    });

    it('should change row selection by click on the row selector [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector(`td[data-rowid="1"] input`);
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);

        onSelectionChange.mockReset();
        const td = container.querySelector(`td[data-rowid="1"]`);
        fireEvent.click(td!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '2']);
    });

    it('should select all rows by click on the common selector when something selected [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        onSelectionChange.mockReset();
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when something selected [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['2']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when nothing selected, [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should select all rows by click on the common selector when nothing selected, [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={[]}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('should deselect all rows by click on the common selector when everything selected, [uncontrolled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);

        onSelectionChange.mockReset();
        const { container: container1 } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                defaultSelectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );
        const th = container1.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);
    });

    it('should deselect all rows by click on the common selector when everything selected, [controlled]', async () => {
        const onSelectionChange = jest.fn();
        const { container } = render(
            <DataTable
                columns={columns}
                data={dataSource}
                enableRowSelection
                selectedRowIds={['1', '2', '3']}
                onRowSelectionChange={onSelectionChange}
            />,
        );

        const input = container.querySelector('thead th input');
        fireEvent.click(input!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);

        onSelectionChange.mockReset();
        const th = container.querySelector('thead th');
        fireEvent.click(th!);
        expect(onSelectionChange).toHaveBeenCalledWith([]);
    });
});
