/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
    cleanup,
    render,
    waitForElement,
    wait,
    // prettyDOM,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from '../Dropdown';

describe('<Dropdown />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Dropdown />);
    });

    it('should support onSelect with options of type string[]', async () => {
        const options = ['Red', 'Blue', 'Green'];
        const onSelect = jest.fn();

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} onSelect={onSelect} />,
        );
        const input = getByTestId('TextInputRoot');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId('DropdownOptionItem'),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        await wait(() => expect(onSelect).toHaveBeenCalledWith('Blue', 1));
    });

    it('should support onChange with options of type string[]', async () => {
        const options = ['Red', 'Blue', 'Green'];
        const onChange = jest.fn();

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} onChange={onChange} />,
        );
        const input = getByTestId('TextInputRoot');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId('DropdownOptionItem'),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        await wait(() =>
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

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} onChange={onChange} />,
        );
        const input = getByTestId('TextInputRoot');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId('DropdownOptionItem'),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        await wait(() =>
            expect(onChange).toHaveBeenCalledWith({ target: { value: 'B' } }),
        );
    });

    it('should render default value display', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getByTestId } = render(
            <Dropdown options={options} value={['B', 'G']} multiple />,
        );

        const input = getByTestId('TextInputInput') as HTMLInputElement;
        await wait(() => expect(input.value).toEqual('Blue, Green'));
    });

    it('should render custom value display', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getByTestId } = render(
            <Dropdown
                options={options}
                value={['B', 'G']}
                onRenderSelectedValue={(
                    value: ReadonlyArray<unknown>,
                    internalOptions: ReadonlyArray<unknown>,
                ) => {
                    return `${value.length} of ${internalOptions.length}`;
                }}
            />,
        );

        const input = getByTestId('TextInputInput') as HTMLInputElement;
        await wait(() => expect(input.value).toEqual('2 of 3'));
    });

    it('should NOT change its value without onChange in controlled mode', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} value="G" />,
        );
        const input = getByTestId('TextInputRoot');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId('DropdownOptionItem'),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        const inputControl = getByTestId('TextInputInput') as HTMLInputElement;
        await wait(() => expect(inputControl.value).toEqual('Green'));
    });

    it('should support controlled mode multiple', async () => {});

    it('should support uncontrolled mode', async () => {});

    it('should support uncontrolled mode multiple', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} multiple />,
        );
        const input = getByTestId('TextInputRoot');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId('DropdownOptionItem'),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);
        userEvent.click(elements[2]);

        const inputControl = getByTestId('TextInputInput') as HTMLInputElement;
        await wait(() => expect(inputControl.value).toEqual('Blue, Green'));
    });
});
