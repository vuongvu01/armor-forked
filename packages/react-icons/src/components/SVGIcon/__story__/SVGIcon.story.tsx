import React from 'react';
import { CancelCircleFilledIcon } from '../../../icons/Cancel';

import { SVGIcon } from '../SVGIcon';
import { makeTheme } from '../../../styling/make/make-theme';

export default {
    title: 'Components/SVGIcon',
    component: SVGIcon,
    parameters: {},
};

export const Margins = () => (
    <CancelCircleFilledIcon marginLeft={2} marginRight={2} />
);
