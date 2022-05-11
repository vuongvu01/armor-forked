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
import { dataSource } from '../__story__/demoData';

const expandableSectionColumns = [
    {
        title: 'Name',
        id: 'name',
        expandableSectionController: true,
    },
    {
        title: 'Age',
        id: 'age',
        sortable: true,
        formatDataCellContent: (value: any) => `${value} years`,
    },
    {
        title: 'Address',
        id: 'address',
    },
];

describe('<DataTable />', () => {
    describe('Expansion section', () => {
        afterEach(async () => {
            cleanup();
            await cleanupHooks();
        });

        it('should support expandable section', async () => {
            const { container, getByText } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={dataSource}
                    renderExpandableSection={(item) => (
                        <span>
                            {item.name} lives in {item.address}
                        </span>
                    )}
                />,
            );

            const section = getByText('Jill lives in Raccoon City');
            expect(section).toBeInTheDocument();

            const sections = container.querySelectorAll(
                '.TableExpandableSection-Root',
            );
            expect(sections.length).toEqual(3);

            const controllers = container.querySelectorAll(
                '.TableControllerCell-Root',
            );
            expect(controllers.length).toEqual(3);
        });

        it('should expand a section by clicking on the controller, [uncontrolled]', async () => {
            const onSectionExpansionChange = jest.fn();
            const { container } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={dataSource}
                    defaultExpandedSectionIds={['2']}
                    renderExpandableSection={() => <span>1</span>}
                    onSectionExpansionChange={onSectionExpansionChange}
                />,
            );

            const controller = container.querySelector(
                '[data-rowid="3"] .TableControllerCell-Trigger',
            );

            fireEvent.click(controller!);
            expect(onSectionExpansionChange).toHaveBeenCalledWith(['3', '2']);
        });

        it('should expand a section by clicking on the controller, [controlled]', async () => {
            const onSectionExpansionChange = jest.fn();
            const { container } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={dataSource}
                    expandedSectionIds={['2']}
                    renderExpandableSection={() => <span>1</span>}
                    onSectionExpansionChange={onSectionExpansionChange}
                />,
            );

            const controller = container.querySelector(
                '[data-rowid="3"] .TableControllerCell-Trigger',
            );

            fireEvent.click(controller!);
            expect(onSectionExpansionChange).toHaveBeenCalledWith(['3', '2']);
        });

        it('should collapse a section by clicking on the controller, [uncontrolled]', async () => {
            const onSectionExpansionChange = jest.fn();
            const { container } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={dataSource}
                    defaultExpandedSectionIds={['2', '3']}
                    renderExpandableSection={() => <span>1</span>}
                    onSectionExpansionChange={onSectionExpansionChange}
                />,
            );

            const controller = container.querySelector(
                '[data-rowid="3"] .TableControllerCell-Trigger',
            );

            fireEvent.click(controller!);
            expect(onSectionExpansionChange).toHaveBeenCalledWith(['2']);
        });

        it('should collapse a section by clicking on the controller, [controlled]', async () => {
            const onSectionExpansionChange = jest.fn();
            const { container } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={dataSource}
                    expandedSectionIds={['2', '3']}
                    renderExpandableSection={() => <span>1</span>}
                    onSectionExpansionChange={onSectionExpansionChange}
                />,
            );

            const controller = container.querySelector(
                '[data-rowid="3"] .TableControllerCell-Trigger',
            );

            fireEvent.click(controller!);
            expect(onSectionExpansionChange).toHaveBeenCalledWith(['2']);
        });

        it('should expand a section by clicking on the controller when ID datatype is number', async () => {
            const localDataSource = [...dataSource];
            localDataSource[1] = {
                ...localDataSource[1],
                // @ts-ignore
                id: 3,
            };

            const onSectionExpansionChange = jest.fn();
            const { container } = render(
                <DataTable
                    columns={expandableSectionColumns}
                    data={localDataSource}
                    renderExpandableSection={() => <span>1</span>}
                    onSectionExpansionChange={onSectionExpansionChange}
                />,
            );

            const controller = container.querySelector(
                '[data-rowid="3"] .TableControllerCell-Trigger',
            );

            fireEvent.click(controller!);
            expect(onSectionExpansionChange).toHaveBeenCalledWith(['3']);
        });
    });
});
