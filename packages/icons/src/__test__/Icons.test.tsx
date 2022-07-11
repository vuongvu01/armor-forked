/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ArrowDownIcon, ArrowUpIcon } from '../icons/Arrow';

describe('<Icon />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without errors', async () => {
        render(<ArrowDownIcon />);
    });

    it('ensures that a className corresponding to the Icon name is set', async () => {
        const { container: addIconContainer } = render(<ArrowDownIcon />);
        const arrowDownIcon = addIconContainer.querySelector('.ArrowDownIcon');

        expect(arrowDownIcon).not.toBeNull();
        expect(arrowDownIcon).toBeInstanceOf(SVGSVGElement);

        const { container: arrowUpIconContainer } = render(<ArrowUpIcon />);
        const arrowUpIcon = arrowUpIconContainer.querySelector('.ArrowUpIcon');

        expect(arrowUpIcon).not.toBeNull();
        expect(arrowUpIcon).toBeInstanceOf(SVGSVGElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(<ArrowDownIcon className="MyArrow" />);
        const arrowDownIcon = container.querySelector('.ArrowDownIcon.MyArrow');

        expect(arrowDownIcon).not.toBeNull();
    });
});
