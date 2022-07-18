/* eslint-disable @typescript-eslint/no-non-null-assertion, import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, waitFor, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from '../Dropdown';
import { OPTION_LIST_ITEM } from '../../OptionList/constants';

describe('<Dropdown />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should support onSelect with options of type string[]', async () => {
        const options = ['Red', 'Blue', 'Green'];
        const onSelect = jest.fn();

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onSelect={onSelect} />,
        );
        const input = container.querySelector('input');
        act(() => {
            userEvent.click(input!);
        });

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        act(() => {
            userEvent.click(elements[1]);
        });

        await waitFor(() => expect(onSelect).toHaveBeenCalledWith('Blue', 1));
    });

    it('should support onSelect with options of type {value, label}[]', async () => {
        const options = [
            { value: 3, label: 'Red', code: 'r' },
            { value: 'b', label: 'Blue', code: 'b' },
            { value: 5, label: 'Green', code: 'g' },
        ];
        const onSelect = jest.fn();

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onSelect={onSelect} />,
        );
        const input = container.querySelector('input');
        act(() => {
            userEvent.click(input!);
        });

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        act(() => {
            userEvent.click(elements[1]);
        });

        await waitFor(() =>
            expect(onSelect).toHaveBeenCalledWith(
                { value: 'b', label: 'Blue', code: 'b' },
                1,
            ),
        );
    });

    it('should support onChange with options of type string[]', async () => {
        const options = ['Red', 'Blue', 'Green'];
        const onChange = jest.fn();

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onChange={onChange} />,
        );
        const input = container.querySelector('input');
        act(() => {
            userEvent.click(input!);
        });

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        act(() => {
            userEvent.click(elements[1]);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({ target: { value: 1 } }),
        );
    });

    it('should support onChange with options of type {value, label}[]', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];
        const onChange = jest.fn();

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onChange={onChange} />,
        );
        const input = container.querySelector('input');
        act(() => {
            userEvent.click(input!);
        });

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        act(() => {
            userEvent.click(elements[1]);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({ target: { value: 'B' } }),
        );
    });

    it('should render default value display', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container } = render(
            <Dropdown options={options} value={['B', 'G']} multiple />,
        );

        const input = container.querySelector('input');
        await waitFor(() => expect(input!.value).toEqual('Blue, Green'));
    });

    it('should support correct onChange event structure', async () => {
        const name = 'jobTitles';
        const onChange = jest.fn();

        const jobTitles = [
            { value: 'AA', label: 'AA-label' },
            { value: 'BB', label: 'BB-label' },
        ];

        const { container, rerender } = render(
            <Dropdown
                name={name}
                options={jobTitles}
                onChange={onChange}
                value={[]}
                multiple
                enableSearchOption
                enableSelectAllOption
                open
            />,
        );

        // checking for "Select all"
        const selectAll = screen.getByText('Select all');
        act(() => {
            userEvent.click(selectAll);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({
                target: {
                    name,
                    value: ['AA', 'BB'],
                },
            }),
        );
        onChange.mockClear();

        // checking for "Selecting one element"
        const aaItem = screen.getByText('AA-label');
        act(() => {
            userEvent.click(aaItem);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({
                target: {
                    name,
                    value: ['AA'],
                },
            }),
        );
        onChange.mockClear();

        // checking for "Deselecting one element"
        rerender(
            <Dropdown
                name={name}
                options={jobTitles}
                onChange={onChange}
                value={['AA']}
                multiple
                enableSearchOption
                enableSelectAllOption
                open
            />,
        );

        const tagClose = container.querySelector('.Tag-CloseIconContainer');
        act(() => {
            userEvent.click(tagClose!);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({
                target: {
                    name,
                    value: [],
                },
            }),
        );
        onChange.mockClear();

        // checking for "Deselect all"
        const clearAll = container.querySelector('.ClearButton-Root');

        act(() => {
            userEvent.click(clearAll!);
        });

        await waitFor(() =>
            expect(onChange).toHaveBeenCalledWith({
                target: {
                    name,
                    value: [],
                },
            }),
        );
        onChange.mockClear();
    });
});
