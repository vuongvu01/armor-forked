/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
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

const demoValue = {
    conditions: [
        {
            id: 'name',
            name: 'name',
            value: 'Max Mustermann',
        },
    ],
};

describe('<FilterEditor />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should support "onValueCandidateChange" property [uncontrolled]', async () => {
        const onValueCandidateChange = jest.fn();
        const { getByText } = render(
            <FilterEditor
                schema={filterSchema}
                onValueCandidateChange={onValueCandidateChange}
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

        expect(onValueCandidateChange).toBeCalled();
        expect(onValueCandidateChange.mock.calls[0][0]).toMatchObject({
            conditions: [
                {
                    id: 'name',
                    name: 'name',
                    value: 'M',
                },
            ],
        });
    });

    it('should support "valueCandidate" property [controlled]', async () => {
        let value = demoValue;

        const { getByText, rerender } = render(
            <FilterEditor schema={filterSchema} valueCandidate={value} />,
        );

        const textInput = getElementByText(
            getByText,
            'Name',
            '.TextInput-Root',
        );
        const input = textInput!.querySelector('input');
        expect(input).toBeInTheDocument();

        expect(input!.value).toEqual('Max Mustermann');

        value = {
            conditions: [
                {
                    id: 'name',
                    name: 'name',
                    value: 'John Smith',
                },
            ],
        };

        rerender(<FilterEditor schema={filterSchema} valueCandidate={value} />);

        expect(input!.value).toEqual('John Smith');
    });

    it('should support "defaultValueCandidate" property', async () => {
        let value = demoValue;

        const { getByText, rerender } = render(
            <FilterEditor
                schema={filterSchema}
                defaultValueCandidate={value}
            />,
        );

        const textInput = getElementByText(
            getByText,
            'Name',
            '.TextInput-Root',
        );
        const input = textInput!.querySelector('input');
        expect(input).toBeInTheDocument();

        expect(input!.value).toEqual('Max Mustermann');

        value = {
            conditions: [
                {
                    id: 'name',
                    name: 'name',
                    value: 'John Smith',
                },
            ],
        };

        rerender(
            <FilterEditor
                schema={filterSchema}
                defaultValueCandidate={value}
            />,
        );

        expect(input!.value).toEqual('John Smith');
    });

    it('should support "value" to "valueCandidate" property value transference on first render', async () => {
        const { getByText } = render(
            <FilterEditor schema={filterSchema} value={demoValue} />,
        );

        const textInput = getElementByText(
            getByText,
            'Name',
            '.TextInput-Root',
        );
        const input = textInput!.querySelector('input');
        expect(input).toBeInTheDocument();

        expect(input!.value).toEqual('Max Mustermann');
    });
});
