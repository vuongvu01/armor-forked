/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Badge } from '../Badge';

const badgeRootClassName = 'Badge-Root';
const badgeValue = 42;

describe('<Badge />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('renders itself without errors', async () => {
        render(<Badge>{badgeValue}</Badge>);
    });

    it('supports forwardRef', () => {
        const { result } = renderHook(() => useRef<HTMLDivElement>(null));

        render(<Badge ref={result.current}>{badgeValue}</Badge>);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('ensures that default user Badge type has corresponding class names set', async () => {
        render(<Badge>{badgeValue}</Badge>);

        const badgeElement = screen.getByText(`${badgeValue}`);
        expect(badgeElement).toHaveClass(badgeRootClassName);
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginX';
        const marginValue = 13;

        const result = renderer
            .create(
                <Badge {...{ [marginAttribute]: marginValue }}>
                    {badgeValue}
                </Badge>,
            )
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });
});
