import React from 'react';

import { PageNavigation } from '../../../src/components';

export default {
    title: 'PageNavigation',
    component: PageNavigation,
};

export const Left = () => (
    <PageNavigation itemCount={100} pageNumber={1} pageSize={10} />
);

export const Middle = () => (
    <PageNavigation itemCount={100} pageNumber={5} pageSize={10} />
);

export const Right = () => (
    <PageNavigation itemCount={100} pageNumber={10} pageSize={10} />
);
