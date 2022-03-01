/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';

import { makeTheme, ThemeProvider } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { PageNavigation } from '../PageNavigation';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/PageNavigation',
    component: PageNavigation,
    decorators: [withWrapper],
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

export const PageSizeSelector = () => {
    const [pageSize, setPageSize] = useState(100);

    return (
        <PageNavigation
            pageNumber={1}
            itemCount={2}
            pageSize={pageSize}
            enablePageSizeSelector
            onPageSizeChange={setPageSize}
            pageSizeList={[
                { label: '100', value: 100 },
                { label: '200', value: 200 },
            ]}
        />
    );
};

export const NoParams = () => {
    return <PageNavigation />;
};

export const OnePageTwoItems = () => {
    return <PageNavigation pageNumber={1} itemCount={2} />;
};

export const ThemeTheme = () => {
    console.log(css`
        border-width: 2px;
    `);

    const customThemeData = {
        armor: {
            componentCSS: {
                PageNavigation: () => css`
                    border-width: 2px;
                `,
            },
        },
    };
    const customTheme = makeTheme(customThemeData);

    return (
        <ThemeProvider theme={customTheme}>
            <PageNavigation pageNumber={1} itemCount={2} />
        </ThemeProvider>
    );
};
