/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { TableExpandableSection } from '..';

describe('<TableExpandableSection />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableExpandableSection />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<TableExpandableSection expanded />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableExpandableSection', {
            Root: [],
            Cell: [],
            Content: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<TableExpandableSection ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <TableExpandableSection>With custom theme</TableExpandableSection>,
            // @ts-ignore
        ).toSupportOverride('TableExpandableSection');
    });
});
