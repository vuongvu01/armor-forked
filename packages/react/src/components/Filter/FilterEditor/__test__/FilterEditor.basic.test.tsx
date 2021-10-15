/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, fireEvent, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterEditor } from '../index';
import { FilterConditionSchemaType } from '../../type';

describe('<FilterEditor />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterEditor />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<FilterEditor />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterEditor', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterEditor ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterEditor).toSupportRestPropsForwarding('FilterEditor');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<FilterEditor>Hello</FilterEditor>).toSupportCustomTheme(
            'FilterEditor',
        );
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(FilterEditor).toSupportMarginAttributes();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(FilterEditor).toSupportAttributeForwarding();
    });

    it('should support "enableCloseOnApply" property', async () => {
        const onClose = jest.fn();

        const filterSchema: FilterConditionSchemaType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                },
            ],
        };

        const { getByText, rerender } = render(
            <FilterEditor
                schema={filterSchema}
                onClose={onClose}
                enableCloseOnApply={false}
            />,
        );

        let applyButton = getByText('Apply');
        expect(applyButton).toBeInTheDocument();

        fireEvent.click(applyButton);
        expect(onClose).not.toBeCalled();

        rerender(<FilterEditor schema={filterSchema} onClose={onClose} />);

        applyButton = getByText('Apply');
        expect(applyButton).toBeInTheDocument();

        fireEvent.click(applyButton);

        expect(onClose).toBeCalled();
    });
});
