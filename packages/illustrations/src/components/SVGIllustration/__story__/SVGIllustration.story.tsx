import React from 'react';
import { RestaurantIllustration } from '../../../illustrations';

import { SVGIllustration } from '../SVGIllustration';

export default {
    title: 'Components/SVGIllustration',
    component: SVGIllustration,
    parameters: {},
};

export const Margins = () => (
    <RestaurantIllustration marginLeft={2} marginRight={2} />
);

export const ColorAttribute = () => (
    <RestaurantIllustration color="primary.main" />
);
