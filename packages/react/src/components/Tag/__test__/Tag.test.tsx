/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Tag } from '../Tag';
import { tagCloseIconContainer, tagRoot } from '../constants';

describe('<Tag />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Tag label="Sample" />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());

        render(<Tag label="Sample" ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should ensure that label typography is as in the spec', () => {
        const label = 'Sample';
        render(<Tag label={label} />);

        const header = screen.getByText(label);
        expect(header).toBeInstanceOf(HTMLParagraphElement);
        expect(header).toHaveClass(
            'Typography-Root--paragraph Typography-Root--small',
        );
    });

    it('should ensure that default user Tag type has corresponding class names set', async () => {
        render(<Tag label="Sample" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass(
            'Tag-Root--default Tag-Root--delete Tag-Root--onHover',
        );

        const iconContainerElement = screen.getByTestId(tagCloseIconContainer);
        expect(iconContainerElement).toHaveClass(
            'Tag-CloseIconContainer--default Tag-CloseIconContainer--delete Tag-CloseIconContainer--onHover',
        );
    });

    it('should ensure that user Tag with delete button enabled has corresponding class names set', async () => {
        render(<Tag label="Sample" deleteOption="enabled" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass(
            'Tag-Root--default Tag-Root--delete Tag-Root--enabled',
        );

        const iconContainerElement = screen.getByTestId(tagCloseIconContainer);
        expect(iconContainerElement).toHaveClass(
            'Tag-CloseIconContainer--delete Tag-CloseIconContainer--enabled',
        );
    });

    it('should ensure that status Tag `approved` has corresponding class names set', async () => {
        render(<Tag type="approved" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass('Tag-Root--approved');
    });

    it('should ensure that status Tag `denied` has corresponding class names set', async () => {
        render(<Tag type="denied" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass('Tag-Root--denied');
    });

    it('should ensure that status Tag `new` has corresponding class names set', async () => {
        render(<Tag type="new" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass('Tag-Root--new');
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginX';
        const marginValue = 13;

        const result = renderer
            .create(<Tag type="new" {...{ [marginAttribute]: marginValue }} />)
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttributes(
            tagRoot,
            marginAttribute,
            marginValue,
        );
    });
});
