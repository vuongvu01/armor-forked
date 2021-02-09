import React from 'react';

import { ArrowDownFilledIcon } from '../../src';

export default {
    title: 'ArrowDownFilledIcon',
    component: ArrowDownFilledIcon,
};

export const Large = () => <ArrowDownFilledIcon large />;

export const Medium = () => <ArrowDownFilledIcon medium />;

export const Small = () => <ArrowDownFilledIcon small />;

export const Inherit = () => (
    <>
        <ArrowDownFilledIcon /> Hello
    </>
);
