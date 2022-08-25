/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ArmorLibraryIllustration } from '../illustrations';

describe('<Illustration />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without any errors', async () => {
        render(<ArmorLibraryIllustration />);
    });

    it('ensures that a className corresponding to the illustration name is set', async () => {
        const { container: armorLibraryIllustrationContainer } = render(
            <ArmorLibraryIllustration />,
        );
        const armorLibraryIllustration =
            armorLibraryIllustrationContainer.querySelector(
                '.ArmorLibraryIllustration',
            );

        expect(armorLibraryIllustration).not.toBeNull();
        expect(armorLibraryIllustration).toBeInstanceOf(SVGSVGElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(
            <ArmorLibraryIllustration className="ExtraClass" />,
        );
        const armorLibraryIllustration = container.querySelector(
            '.ArmorLibraryIllustration.ExtraClass',
        );

        expect(armorLibraryIllustration).not.toBeNull();
    });
});
