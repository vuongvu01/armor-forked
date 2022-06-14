/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { ArrowUpIcon } from '@deliveryhero/armor-icons';
import { Tag } from '../Tag';
import { tagCloseIconContainer, tagRoot } from '../constants';

describe('<Tag /> ', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors ', async () => {
        render(<Tag label="Sample" />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));

        render(<Tag label="Sample" ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should ensure that label typography is as in the spec', () => {
        const label = 'Sample';
        render(<Tag label={label} />);

        const header = screen.getByText(label);
        expect(header).toBeInstanceOf(HTMLDivElement);
        expect(header).toHaveClass(
            'Tag-Label--default Tag-Label--delete Tag-Label--onHover',
        );
    });

    it('should ensure that small tag type class is  set ', () => {
        const label = 'Sample';
        render(<Tag label={label} small />);

        const header = screen.getByText(label);
        expect(header).toBeInstanceOf(HTMLDivElement);
        expect(header).toHaveClass(
            'Tag-Label--small Tag-Label--delete Tag-Label--onHover',
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

    it('should ensure that status Tag `new` has corresponding class names set ', async () => {
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
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });

    it('should ensure that status Tag `on-hold` has corresponding class names set ', async () => {
        render(<Tag type="on-hold" />);

        const containerElement = screen.getByTestId(tagRoot);
        expect(containerElement).toHaveClass('Tag-Root--on-hold');
    });

    it('should have indicator container  and should have correct indicator value', () => {
        render(<Tag type="on-hold" indicator="99" label="test" />);

        const containerElement = screen.getByTestId(tagRoot);

        const indicatorContainer = containerElement.firstChild;
        expect(indicatorContainer).toBeInstanceOf(HTMLDivElement);
        expect(indicatorContainer).toHaveTextContent('99');
    });

    it('should have  icon container and contain svg', () => {
        render(<Tag type="on-hold" icon={<ArrowUpIcon />} />);

        const containerElement = screen.getByTestId(tagRoot);
        const iconContainer = containerElement.firstChild;
        const iconSvg = iconContainer?.firstChild;
        expect(iconContainer).toBeInstanceOf(HTMLDivElement);
        expect(iconSvg).toBeInstanceOf(SVGSVGElement);
    });
});
