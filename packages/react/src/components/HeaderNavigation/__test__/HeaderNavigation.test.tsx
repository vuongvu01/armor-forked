/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { HeaderNavigation } from '../HeaderNavigation';
import { headerNavigationRoot } from '../constants';

describe('<v />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<HeaderNavigation label="Sample" />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());

        render(<HeaderNavigation ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should ensure class names set', () => {
        render(<HeaderNavigation />);

        const headerNavigationRootElement = screen.getByTestId(
            headerNavigationRoot,
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
        expect(result).toSupportMarginAttribute(
            headerNavigationRoot,
            marginAttribute,
            marginValue,
        );
    });
});
