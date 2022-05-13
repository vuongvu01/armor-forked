/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Skeleton } from '..';
import { SKELETON_IMAGE_PLACEHOLDER_SIZE_MAP } from '../constants';

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

    it('should render image placeholder in large size by default', () => {
        const { container } = render(<Skeleton imagePlaceholder />);

        const icon = container.querySelector(
            '.FileImagePortraitIcon',
        ) as Element;

        const size = `${SKELETON_IMAGE_PLACEHOLDER_SIZE_MAP.large * 4}px`;

        expect(icon).toHaveStyle({
            width: size,
            height: size,
        });
    });

    it('should render image placeholder in small size when container size is <= 32px', () => {
        const { container } = render(
            <Skeleton width={8} height={8} imagePlaceholder />,
        );

        const icon = container.querySelector(
            '.FileImagePortraitIcon',
        ) as Element;

        const size = `${SKELETON_IMAGE_PLACEHOLDER_SIZE_MAP.small * 4}px`;

        expect(icon).toHaveStyle({
            width: size,
            height: size,
        });
    });
});
