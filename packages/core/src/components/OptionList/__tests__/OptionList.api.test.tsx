import React from 'react';

import { render, screen } from '@testing-library/react';

import { noop } from '@deliveryhero/armor-system';
import { OptionList } from '../OptionList';
import { OptionListPropsType } from '../type';

const setupComponent = (props: Partial<OptionListPropsType>) => {
    const { internalOptions, internalValue } = {
        internalOptions: [{ label: 'Item', value: 1 }],
        internalValue: [1],
    };

    return render(
        <OptionList
            {...props}
            internalOptions={internalOptions}
            internalValue={internalValue}
            setIsOptionListShown={noop}
            onValueUpdate={noop}
        />,
    );
};

describe('<OptionList />', () => {
    it('should not focus search input when autoFocus=false', () => {
        setupComponent({
            enableSearchOption: true,
            autoFocus: false,
        });

        const input = screen.getByRole('textbox');

        expect(input).not.toHaveFocus();
    });

    it('should focus search input when autoFocus=true', () => {
        setupComponent({
            enableSearchOption: true,
            autoFocus: true,
        });

        const input = screen.getByRole('textbox');

        expect(input).toHaveFocus();
    });
});
