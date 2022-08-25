/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { FilterViewer } from '../index';
import { FilterConditionSchemaElementOrGroupType } from '../../type';

describe('<FilterViewer />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should support non-removable values', async () => {
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
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

        const filterValue = {
            conditions: [
                { id: 'name', name: 'name', value: 'Smirnoff' },
                { id: 'email', name: 'email', value: 'smirnoff@gmail.com' },
            ],
        };

        const { getByText } = render(
            <FilterViewer schema={filterSchema} value={filterValue} />,
        );

        const getCloseIconContainer = (text: string) => {
            const labelNode = getByText(text);
            expect(labelNode).toBeInTheDocument();

            const tagNode = labelNode.closest('.ConditionTag-Root');
            expect(tagNode).toBeInTheDocument();

            return tagNode?.querySelector('.ConditionTag-CloseIconContainer');
        };

        expect(getCloseIconContainer('Name')).not.toBeInTheDocument();
        expect(getCloseIconContainer('Email')).toBeInTheDocument();
    });

    it('should support "filterActions" property', async () => {
        const filterValue = {
            conditions: [{ id: 'name', name: 'name', value: 'Smirnoff' }],
        };
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                },
            ],
        };

        const { getByText } = render(
            <FilterViewer
                value={filterValue}
                schema={filterSchema}
                filterActions={<div>More</div>}
            />,
        );

        const actionNode = getByText('More');
        expect(actionNode).toBeInTheDocument();

        const actionsNode = actionNode.closest('.FilterViewer-Actions');
        expect(actionsNode).toBeInTheDocument();
    });

    it('should support "beforeFilterActions" and "afterFilterActions" property', async () => {
        const filterValue = {
            conditions: [{ id: 'name', name: 'name', value: 'Smirnoff' }],
        };
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                },
            ],
        };

        const { getByText } = render(
            <FilterViewer
                value={filterValue}
                schema={filterSchema}
                beforeFilterActions={<div>Before</div>}
                afterFilterActions={<div>After</div>}
            />,
        );

        const beforeFilterActions = getByText('Before');
        expect(beforeFilterActions).toBeInTheDocument();

        const afterFilterActions = getByText('After');
        expect(afterFilterActions).toBeInTheDocument();
    });

    it('should support "afterAddFilterButton" property', async () => {
        const { getByText } = render(
            <FilterViewer afterAddFilterButton={<div>Button</div>} />,
        );

        const afterAddFilterButton = getByText('Button');
        expect(afterAddFilterButton).toBeInTheDocument();

        const afterAddFilterButtonParent = afterAddFilterButton.closest(
            '.FilterViewer-AddFiltersButtonWrapper',
        );
        expect(afterAddFilterButtonParent).toBeInTheDocument();
    });

    it('should support "onClearAllFilterButtonClick" property', async () => {
        const filterValue = {
            conditions: [{ id: 'name', name: 'name', value: 'Smirnoff' }],
        };
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                },
            ],
        };

        const mockFn = jest.fn();

        const { getByText } = render(
            <FilterViewer
                value={filterValue}
                schema={filterSchema}
                onClearAllFilterButtonClick={mockFn}
            />,
        );

        const clearAllNode = getByText('Clear all');
        userEvent.click(clearAllNode);

        const confirmNode = getByText('Yes, Clear it');
        userEvent.click(confirmNode);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
