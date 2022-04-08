/* eslint-disable @typescript-eslint/no-non-null-assertion, import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { TextInput } from '../..';

describe('<TextInput />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should accept label prop', async () => {
        const { getByText } = render(<TextInput label="input_label" />);
        expect(getByText('input_label')).toBeInTheDocument();
    });

    it('should accept multiline prop', async () => {
        const { container } = render(<TextInput multiline />);
        expect(container.querySelector('textarea')).toBeInTheDocument();
    });

    it('should render before and after props', async () => {
        const mockBefore = <div>before_text</div>;
        const mockAfter = <div>after_text</div>;

        const { getByText } = render(
            <TextInput before={mockBefore} after={mockAfter} />,
        );
        expect(getByText('before_text')).toBeInTheDocument();
        expect(getByText('after_text')).toBeInTheDocument();
    });

    it('should accept defaultValue prop', async () => {
        const { getByDisplayValue } = render(
            <TextInput defaultValue="default_text" />,
        );
        expect(getByDisplayValue('default_text')).toBeInTheDocument();
    });

    it('should trigger onChange handler uncontrolled', async () => {
        const mockOnChange = jest.fn();

        const { getByRole } = render(
            <TextInput onChange={(e) => mockOnChange(e.target.value)} />,
        );

        fireEvent.change(getByRole('textbox'), {
            target: { value: 'some_value' },
        });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith('some_value');
    });

    it('should accept value prop and trigger onChange controlled', async () => {
        const mockOnChange = jest.fn();
        const { getByDisplayValue } = render(
            <TextInput
                onChange={(e) => mockOnChange(e.target.value)}
                value="text_input"
            />,
        );
        const inputEle = getByDisplayValue('text_input');

        fireEvent.change(inputEle, {
            target: { value: 'some_value' },
        });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith('some_value');
    });

    it('should accept disabled prop and do not trigger onClick', async () => {
        const mockOnClick = jest.fn();
        const { getByDisplayValue } = render(
            <TextInput onClick={mockOnClick} value="text_input" disabled />,
        );
        const inputEle = getByDisplayValue('text_input');

        fireEvent.click(inputEle);

        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
