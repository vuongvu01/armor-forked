/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Search } from '../Search';
import { searchRoot } from '../constants';
import { searchInputClearIcon } from '../SearchClearAction/constants';

const foodOptions = [
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    { value: 2, label: 'Pho' },
    { value: 3, label: 'Risotto' },
    { value: 4, label: 'Pizza' },
    { value: 5, label: 'Enchiladas' },
    { value: 6, label: 'Börek' },
    { value: 7, label: 'Quiche' },
    { value: 8, label: 'Köfte' },
    { value: 9, label: 'Pad Thai' },
    { value: 10, label: 'Churrasco' },
    { value: 11, label: 'Baozi' },
    { value: 12, label: 'Ceviche' },
    { value: 13, label: 'Mac & Cheese' },
    { value: 14, label: 'Paella' },
    { value: 15, label: 'Dim sum' },
    { value: 16, label: 'Hamburger' },
    { value: 17, label: 'Ramen' },
    { value: 18, label: 'Sushi' },
    { value: 19, label: 'Burrito' },
];

describe('<Search />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Search options={foodOptions} />);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());

        render(<Search ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLInputElement);
    });

    it('should ensure that suggestions list typography is as in the spec', () => {
        render(<Search defaultQuery="food" options={foodOptions} />);

        const match = screen.getByText('Biryani');
        expect(match).toBeInstanceOf(HTMLParagraphElement);
        expect(match).toHaveClass(
            'Typography-Root--paragraph Typography-Root--medium',
        );
    });

    it('should ensure clear icon is displayed on non-empty input', () => {
        render(<Search defaultQuery="birya" options={foodOptions} />);

        const match = screen.getByTestId(searchInputClearIcon);
        expect(match).toBeInstanceOf(SVGSVGElement);
        expect(match).toHaveClass('SearchClearAction-AfterIcon');
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginX';
        const marginValue = 13;

        const result = renderer
            .create(<Search {...{ [marginAttribute]: marginValue }} />)
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(
            searchRoot,
            marginAttribute,
            marginValue,
        );
    });
});