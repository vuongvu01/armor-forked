/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import {
    // fireEvent,
    cleanup,
    render,
    // prettyDOM,
    // wait,
    // waitForElement,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
// import userEvent from '@testing-library/user-event';

import { <%- component_name_pascal %> } from '..';

describe('<<%- component_name_pascal %> />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<<%- component_name_pascal %> />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<<%- component_name_pascal %> />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('<%- component_name_pascal %>', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(<%- component_name_pascal %>).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(<%- component_name_pascal %>).toSupportRestPropsForwarding('<%- component_name_pascal %>');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<<%- component_name_pascal %>>Hello</<%- component_name_pascal %>>).toSupportOverride(
            '<%- component_name_pascal %>',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(<%- component_name_pascal %>).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(<%- component_name_pascal %>).toSupportAttributeForwarding();
    });
});
