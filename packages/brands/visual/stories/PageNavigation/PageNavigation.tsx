import React from 'react';
import { PageNavigation } from '@deliveryhero/armor';

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

export const PageSelector = () => (
    <PageNavigation
        itemCount={400}
        pageNumber={2}
        pageSize={100}
        enablePageSizeSelector
        pageSizeList={[
            { label: '100', value: 100 },
            { label: '200', value: 200 },
        ]}
    />
);
