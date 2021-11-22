/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, fireEvent, render } from '@testing-library/react';
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

const getElementByText = (
    getByText: (text: string) => HTMLElement,
    text: string,
    selector: string,
) => {
    const element = getByText(text);
    expect(element).toBeInTheDocument();

    const parentElement = element.closest(selector);
    expect(parentElement).toBeInTheDocument();

    return parentElement;
};

describe('<FilterEditor />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should support "onValueChange" property [uncontrolled]', async () => {
        const onValueChange = jest.fn();
        const { getByText } = render(
            <FilterEditor
                schema={filterSchema}
                onValueChange={onValueChange}
            />,
        );

        const textInput = getElementByText(
            getByText,
            'Name',
            '.TextInput-Root',
        );
        const input = textInput!.querySelector('input');
        expect(input).toBeInTheDocument();

        userEvent.type(input!, 'Max Mustermann');

        const applyButton = getByText('Apply');
        expect(applyButton).toBeInTheDocument();

        fireEvent.click(applyButton);

        expect(onValueChange).toBeCalled();
        expect(onValueChange.mock.calls[0][0]).toMatchObject({
            conditions: [
                {
                    id: 'name',
                    name: 'name',
                    value: 'Max Mustermann',
                },
            ],
        });
    });
});
