/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { RestaurantIllustration } from '../illustrations';

describe('<Illustration />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without errors', async () => {
        render(<RestaurantIllustration />);
    });

    it('ensures that a className corresponding to the Icon name is set', async () => {
        const { container: restaurantIllustrationContainer } = render(
            <RestaurantIllustration />,
        );
        const restaurantIllustration =
            restaurantIllustrationContainer.querySelector(
                '.RestaurantIllustration',
            );

        expect(restaurantIllustration).not.toBeNull();
        expect(restaurantIllustration).toBeInstanceOf(SVGSVGElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(
            <RestaurantIllustration className="ExtraClass" />,
        );
        const restaurantIllustration = container.querySelector(
            '.RestaurantIllustration.ExtraClass',
        );

        expect(restaurantIllustration).not.toBeNull();
    });
});
