/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { AddIcon, EditIcon } from '../icons/Essentials';

describe('<Icon />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without errors', async () => {
        render(<AddIcon />);
    });

    it('ensures that a className corresponding to the Icon name is set', async () => {
        const { container: addIconContainer } = render(<AddIcon />);
        const addIcon = addIconContainer.querySelector('.AddIcon');

        expect(addIcon).not.toBeNull();
        expect(addIcon).toBeInstanceOf(SVGSVGElement);

        const { container: editIconContainer } = render(<EditIcon />);
        const editIcon = editIconContainer.querySelector('.EditIcon');

        expect(editIcon).not.toBeNull();
        expect(addIcon).toBeInstanceOf(SVGSVGElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(<AddIcon className="PlusSign" />);
        const addIcon = container.querySelector('.AddIcon.PlusSign');

        expect(addIcon).not.toBeNull();
    });
});
