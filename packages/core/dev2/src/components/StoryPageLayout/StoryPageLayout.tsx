import React, { FC, Fragment } from 'react';
import { Box, Grid } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { StoryPageLayoutDataType, StoryPageLayoutPropsType } from './type';
import { useStoryPageLayout } from './hooks/useStoryPageLayout';
import { PageLayout } from '../PageLayout/PageLayout';
import { ThemeSelector } from './ThemeSelector';
import {
    StoryComponentLink,
    StoryStoryLink,
    StoryPageSidePanel,
    StoryPageContainer,
} from './style';
import { prepareNavigation } from './utils/prepareNavigation';
import { StoryPageContent } from './StoryPageContent';

export const StoryPageLayout: FC<StoryPageLayoutPropsType> = (props) => {
    const {
        pageLayoutProps,
        storyLinks,
        componentName,
        storyPageContentProps,
        themeSelectorProps,
        theme,
        hasTheme,
        hasNoTheme,
    } = useStoryPageLayout(props);

    return (
        <StaticQuery
            query={graphql`
                query StoryPageLayoutQuery {
                    allSitePage {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                }
            `}
            render={(data: StoryPageLayoutDataType) => {
                const structure = prepareNavigation(
                    data,
                    componentName,
                    storyLinks,
                );
                return (
                    <PageLayout {...pageLayoutProps}>
                        <StoryPageContainer container spacing={3} wrap="nowrap">
                            <StoryPageSidePanel item xs={3}>
                                <Box padding={5} paddingRight={0}>
                                    {structure.map(({ name, url, stories }) => (
                                        <Fragment key={name}>
                                            <StoryComponentLink to={url}>
                                                {name}
                                            </StoryComponentLink>
                                            {stories.map(
                                                ({
                                                    name: storyName,
                                                    url: storyURL,
                                                }) => (
                                                    <StoryStoryLink
                                                        to={storyURL}
                                                        key={`${name}_${storyName}`}
                                                    >
                                                        {storyName}
                                                    </StoryStoryLink>
                                                ),
                                            )}
                                        </Fragment>
                                    ))}
                                </Box>
                            </StoryPageSidePanel>
                            <Grid item xs={9}>
                                {hasTheme && (
                                    <ThemeProvider theme={theme}>
                                        <StoryPageContent
                                            {...storyPageContentProps}
                                        />
                                    </ThemeProvider>
                                )}
                                {hasNoTheme && (
                                    <StoryPageContent
                                        {...storyPageContentProps}
                                    />
                                )}
                            </Grid>
                            <ThemeSelector {...themeSelectorProps} />
                        </StoryPageContainer>
                    </PageLayout>
                );
            }}
        />
    );
};

export default StoryPageLayout;
