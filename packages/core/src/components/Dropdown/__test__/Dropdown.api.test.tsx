/* eslint-disable @typescript-eslint/no-non-null-assertion, import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, waitFor, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from '../Dropdown';
import { textInputInput } from '../../TextInput/constants';
import { OPTION_LIST_ITEM } from '../../OptionList/constants';
import { tagRoot } from '../../Tag/constants';
import { searchRoot } from '../../Search/constants';

describe('<Dropdown />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render options as Tags for multi-select', () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getAllByTestId } = render(
            <Dropdown options={options} value={['B', 'G']} multiple />,
        );

        const tag = getAllByTestId(tagRoot)[0];
        expect(tag.className).toContain('Tag-Root');
        expect(tag.firstChild).toHaveTextContent('Blue');
        expect(tag.firstChild).toHaveClass(
            'Tag-Label--default Tag-Label--delete Tag-Label--enabled',
        );
    });

    it('should render the search option with built-in suggestions hidden', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getByTestId } = render(
            <Dropdown
                options={options}
                multiple
                enableSearchOption
                isListExpanded
            />,
        );

        const search = getByTestId(searchRoot);

        await waitFor(() => {
            expect(search).toHaveClass('Search-Root--hidden_suggestions');
        });
    });

    it('should render only the options that match the search query', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getAllByTestId, getByPlaceholderText } = render(
            <Dropdown
                options={options}
                value={['B', 'G']}
                multiple
                enableSearchOption
                open
            />,
        );

        const searchInput = getByPlaceholderText('Search');
        act(() => {
            userEvent.type(searchInput, 'gr');
        });

        const matchingOptions = getAllByTestId(OPTION_LIST_ITEM);
        await waitFor(() => {
            expect(matchingOptions.length).toEqual(1);
        });
    });

    it('should render the select all option with support for custom label', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const selectAllLabel = 'Select/Deselect All';

        const { getByText } = render(
            <Dropdown
                options={options}
                value={['B', 'G']}
                multiple
                enableSelectAllOption
                isListExpanded
                selectAllLabel={selectAllLabel}
            />,
        );

        const selectAllOption = getByText(selectAllLabel);
        await waitFor(() => {
            expect(selectAllOption).toHaveClass('OptionListItem-Typography');
        });
    });

    it('should render custom value display', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container } = render(
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

        const input = container.querySelector('input');
        await waitFor(() => expect(input!.value).toEqual('2 of 3'));
    });

    it('should render custom value display as Node', async () => {
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
                    return (
                        <div data-testid="display-node-test">
                            {value.length} of {internalOptions.length}
                        </div>
                    );
                }}
            />,
        );

        const displayNode = getByTestId('display-node-test');

        await waitFor(() => expect(displayNode.textContent).toEqual('2 of 3'));
    });

    it('should NOT change its value without onChange in controlled mode', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container, getAllByTestId, getByTestId } = render(
            <Dropdown options={options} value="G" />,
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

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
        await waitFor(() => expect(inputControl.value).toEqual('Green'));
    });

    it('should support controlled mode multiple', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const mockOnChange = jest.fn();

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown
                options={options}
                multiple
                value={[]}
                onChange={(e) => mockOnChange(e.target.value)}
            />,
        );
        const input = container.querySelector('input');
        userEvent.click(input!);

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        userEvent.click(elements[1]);
        userEvent.click(elements[2]);

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenNthCalledWith(1, ['B']);
        expect(mockOnChange).toHaveBeenNthCalledWith(2, ['G']);
        expect(inputControl.value).toEqual(' ');
    });

    it('should support uncontrolled mode', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} />,
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
            userEvent.click(elements[2]);
        });

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
        await waitFor(() => expect(inputControl.value).toEqual('Green'));
    });

    it('should support uncontrolled mode multiple', async () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { container, getByTestId, getAllByTestId } = render(
            <Dropdown options={options} multiple />,
        );
        const input = container.querySelector('input');
        userEvent.click(input!);

        const elements = await waitFor(() => getAllByTestId(OPTION_LIST_ITEM), {
            container,
            timeout: 1000,
        });

        userEvent.click(elements[1]);
        userEvent.click(elements[2]);

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
        await waitFor(() => expect(inputControl.value).toEqual('Blue, Green'));
    });

    it('should be possible to clear the options in uncontrolled mode', () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const handleChange = jest.fn();

        const { container } = render(
            <Dropdown
                options={options}
                multiple
                defaultValue={[options[0].value]}
                onChange={handleChange}
            />,
        );

        const label = screen.getByText(options[0].label);

        expect(label).toBeVisible();

        const clearButton = container.querySelector('.ClearButton-Root')!;

        userEvent.click(clearButton);

        expect(handleChange).toHaveBeenCalledWith({ target: { value: [] } });
    });

    it('should be possible to clear the options in controlled mode', () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const handleChange = jest.fn();

        const { container } = render(
            <Dropdown
                options={options}
                multiple
                value={[options[0].value]}
                onChange={handleChange}
            />,
        );

        const label = screen.getByText(options[0].label);

        expect(label).toBeVisible();

        const clearButton = container.querySelector('.ClearButton-Root')!;

        userEvent.click(clearButton);

        expect(handleChange).toHaveBeenCalledWith({ target: { value: [] } });
    });
});
