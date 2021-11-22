/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

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
import renderer from 'react-test-renderer';

import { Skeleton } from '..';

describe('<Skeleton />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Skeleton />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Skeleton />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Skeleton', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Skeleton ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Skeleton).toSupportRestPropsForwarding('Skeleton');
    });

    it('should support margin attributes', async () => {
        const marginAttribute = 'marginY';
        const marginValue = 4;

        const result = renderer
            .create(
                <Skeleton
                    {...{ [marginAttribute]: marginValue }}
                    width={20}
                    height={20}
                />,
            )
            .toJSON();
        // @ts-ignore
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Skeleton).toSupportAttributeForwarding();
    });
});
