/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { PageNavigation } from '../PageNavigation';

export default {
    title: 'Components/PageNavigation',
    component: PageNavigation,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <PageNavigation
            itemCount={100}
            pageNumber={pageNumber}
            pageSize={10}
            onPageSelect={setPageNumber}
        />
    );
};

export const NoParams = () => {
    return <PageNavigation />;
};
