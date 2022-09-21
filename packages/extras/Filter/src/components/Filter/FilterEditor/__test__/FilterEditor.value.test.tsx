/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import {
    cleanup,
    render,
    screen,
    waitFor,
    fireEvent,
} from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { FilterEditor } from '../index';
import { FilterConditionSchemaElementOrGroupType } from '../../type';

const filterSchema: FilterConditionSchemaElementOrGroupType = {
    conditions: [
        {
            id: 'name',
            label: 'Name',
        },
    ],
};

describe('<FilterEditor />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should support "onValueChange" property [uncontrolled]', async () => {
        const onValueChange = jest.fn();

        render(
            <FilterEditor
                schema={filterSchema}
                onValueChange={onValueChange}
            />,
        );

        const input = screen.getByRole('textbox');

        userEvent.type(input, 'Max Mustermann');

        const applyButton = screen.getByText('Apply');

        userEvent.click(applyButton);

        expect(onValueChange).toHaveBeenCalledWith(
            expect.objectContaining({
                conditions: [
                    {
                        id: 'name',
                        name: 'name',
                        value: 'Max Mustermann',
                    },
                ],
            }),
        );
    });

    it('should be possible to submit the form by hitting ENTER key', async () => {
        const onValueChange = jest.fn();

        render(
            <FilterEditor
                schema={filterSchema}
                onValueChange={onValueChange}
            />,
        );

        const input = screen.getByRole('textbox');

        userEvent.type(input, 'John Doe');

        fireEvent.submit(input);

        await waitFor(() => {
            expect(onValueChange).toHaveBeenCalledWith(
                expect.objectContaining({
                    conditions: [
                        {
                            id: 'name',
                            name: 'name',
                            value: 'John Doe',
                        },
                    ],
                }),
            );
        });
    });
});
