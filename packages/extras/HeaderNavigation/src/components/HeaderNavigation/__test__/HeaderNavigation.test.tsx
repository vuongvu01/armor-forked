/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { HeaderNavigation } from '../HeaderNavigation';
import { HEADER_NAVIGATION_ROOT } from '../constants';

describe('<HeaderNavigation />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<HeaderNavigation />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));

        render(<HeaderNavigation ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should ensure class names set', () => {
        render(<HeaderNavigation />);

        const headerNavigationRootElement = screen.getByTestId(
            HEADER_NAVIGATION_ROOT,
        );
        expect(headerNavigationRootElement).toBeInstanceOf(HTMLDivElement);
        expect(headerNavigationRootElement).toHaveClass(
            'HeaderNavigation-Root',
        );
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginX';
        const marginValue = 13;

        const result = renderer
            .create(
                <HeaderNavigation {...{ [marginAttribute]: marginValue }} />,
            )
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });
});
