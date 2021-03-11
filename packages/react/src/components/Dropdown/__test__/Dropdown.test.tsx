/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, wait, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { Dropdown } from '../Dropdown';
import { textInputInput } from '../../TextInput/constants';
import { OPTION_LIST_ITEM } from '../../OptionList/constants';
import { tagRoot } from '../../Tag/constants';
import { searchRoot } from '../../Search/constants';

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

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onSelect={onSelect} />,
        );
        const input = container.querySelector('input');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        await wait(() => expect(onSelect).toHaveBeenCalledWith('Blue', 1));
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
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        await wait(() =>
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
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
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

        const { container, getAllByTestId } = render(
            <Dropdown options={options} onChange={onChange} />,
        );
        const input = container.querySelector('input');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
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

        const { container } = render(
            <Dropdown options={options} value={['B', 'G']} multiple />,
        );

        const input = container.querySelector('input');
        await wait(() => expect(input!.value).toEqual('Blue, Green'));
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

    it('should render the search option with built-in suggestions hidden', () => {
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
        expect(search).toHaveClass('Search-Root--hidden_suggestions');
    });

    it.skip('should render only the options that match the search query', () => {
        const options = [
            { label: 'Red', value: 'R' },
            { label: 'Blue', value: 'B' },
            { label: 'Green', value: 'G' },
        ];

        const { getAllByTestId } = render(
            <Dropdown
                options={options}
                value={['B', 'G']}
                multiple
                enableSearchOption
                open
                defaultSearchQuery="gr"
            />,
        );

        const matchingOptions = getAllByTestId(OPTION_LIST_ITEM);
        expect(matchingOptions.length).toEqual(1);
    });

    it('should render the select all option with support for custom label', () => {
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
        expect(selectAllOption).toHaveClass('OptionListItem-Typography');
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
        await wait(() => expect(input!.value).toEqual('2 of 3'));
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
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
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
        const input = container.querySelector('input');
        userEvent.click(input!);

        const elements = await waitForElement(
            () => getAllByTestId(OPTION_LIST_ITEM),
            { container, timeout: 1000 },
        );

        userEvent.click(elements[1]);
        userEvent.click(elements[2]);

        const inputControl = getByTestId(textInputInput) as HTMLInputElement;
        await wait(() => expect(inputControl.value).toEqual('Blue, Green'));
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginY';
        const marginValue = 4;

        const result = renderer
            .create(
                <Dropdown
                    {...{
                        [marginAttribute]: marginValue,
                    }}
                />,
            )
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });
});
