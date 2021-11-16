import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import SimpleReactLightbox from 'simple-react-lightbox';

import { theme, GlobalStyle } from '../../style';
import { MDXComponents } from './MDXComponents';
import { StateProviders } from '../../states/providers';
import { NetworkStatusProvider } from '../NetworkStatusProvider';

const queryClient = new QueryClient();

/**
 * This is a top-level wrapper, it wraps everything else, including the ApplicationLayout.
 */
export const Providers: FC = ({ children }) => {
    return (
        <SimpleReactLightbox>
            <MUIThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        <QueryClientProvider client={queryClient}>
                            <MDXProvider components={MDXComponents}>
                                <NetworkStatusProvider>
                                    <StateProviders>{children}</StateProviders>
                                </NetworkStatusProvider>
                            </MDXProvider>
                        </QueryClientProvider>
                    </>
                </ThemeProvider>
            </MUIThemeProvider>
        </SimpleReactLightbox>
    );
};
