import React, { FC, Fragment } from 'react';
import { Box, Grid } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import { StoryPageLayoutPropsType } from './type';
import { useStoryPageLayout } from './hooks/useStoryPageLayout';
import { PageLayout } from '../PageLayout/PageLayout';
import { PageOffset } from '../PageOffset';
import { Typography } from '../Typography';
import { StoryStoryLink } from './style';

export const StoryPageLayout: FC<StoryPageLayoutPropsType> = props => {
    const { title, pageLayoutProps, Story, storyLinks } = useStoryPageLayout(
        props,
    );

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
            render={data => {
                // console.log(data);
                return (
                    <PageLayout {...pageLayoutProps}>
                        <Grid container spacing={3} wrap="nowrap">
                            <Grid item xs={3}>
                                <Box padding={5} paddingRight={0}>
                                    {storyLinks.map(({ name, url }) => (
                                        <Fragment key={name}>
                                            <StoryStoryLink to={url}>
                                                {name}
                                            </StoryStoryLink>
                                        </Fragment>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid>
                                <Box paddingLeft={5} paddingRight={5}>
                                    <Typography
                                        variant="h1"
                                        component="h1"
                                        enableVerticalGutter
                                    >
                                        {title}
                                    </Typography>
                                    {!!Story && <Story />}
                                </Box>
                            </Grid>
                        </Grid>
                        <PageOffset />
                    </PageLayout>
                );
            }}
        />
    );
};

export default StoryPageLayout;
