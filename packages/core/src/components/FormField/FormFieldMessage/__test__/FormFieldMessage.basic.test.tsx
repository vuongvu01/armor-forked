/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { FormFieldMessage } from '../../../index';

describe('<FormFieldMessage />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<FormFieldMessage />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FormFieldMessage />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FormFieldMessage', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(FormFieldMessage).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FormFieldMessage).toSupportRestPropsForwarding(
            'FormFieldMessage',
        );
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<FormFieldMessage>Hello</FormFieldMessage>).toSupportOverride(
            'FormFieldMessage',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FormFieldMessage).toSupportMarginProps();
    });
});
