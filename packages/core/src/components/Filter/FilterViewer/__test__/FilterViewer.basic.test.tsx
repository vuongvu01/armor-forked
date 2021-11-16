/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FilterViewer } from '../index';
import { FilterConditionSchemaElementOrGroupType } from '../../type';

describe('<FilterViewer />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FilterViewer />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FilterViewer />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FilterViewer', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FilterViewer ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportRestPropsForwarding('FilterViewer');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<FilterViewer>Hello</FilterViewer>).toSupportCustomTheme(
            'FilterViewer',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FilterViewer).toSupportAttributeForwarding();
    });

    it('should support non-removable values', async () => {
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                    removable: false,
                },
                {
                    id: 'email',
                    label: 'Email',
                },
            ],
        };

        const filterValue = {
            conditions: [
                { id: 'name', name: 'name', value: 'Smirnoff' },
                { id: 'email', name: 'email', value: 'smirnoff@gmail.com' },
            ],
        };

        const { getByText } = render(
            <FilterViewer schema={filterSchema} value={filterValue} />,
        );

        const getCloseIconContainer = (text: string) => {
            const labelNode = getByText(text);
            expect(labelNode).toBeInTheDocument();

            const tagNode = labelNode.closest('.ConditionTag-Root');
            expect(tagNode).toBeInTheDocument();

            return tagNode!.querySelector('.ConditionTag-CloseIconContainer');
        };

        expect(getCloseIconContainer('Name')).not.toBeInTheDocument();
        expect(getCloseIconContainer('Email')).toBeInTheDocument();
    });

    it('should support "filterActions" property', async () => {
        const filterValue = {
            conditions: [{ id: 'name', name: 'name', value: 'Smirnoff' }],
        };
        const filterSchema: FilterConditionSchemaElementOrGroupType = {
            conditions: [
                {
                    id: 'name',
                    label: 'Name',
                },
            ],
        };

        const { getByText } = render(
            <FilterViewer
                value={filterValue}
                schema={filterSchema}
                filterActions={<div>More</div>}
            />,
        );

        const actionNode = getByText('More');
        expect(actionNode).toBeInTheDocument();

        const actionsNode = actionNode.closest('.FilterViewer-Actions');
        expect(actionsNode).toBeInTheDocument();
    });
});
