import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { StoryPropsType } from './type';
import { StoryRoot } from './style';
import { useStory } from './hooks/useStory';

export const Story: FC<StoryPropsType> = props => {
    const { foo } = useStory(props);

    return (
        <StoryRoot>
            <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid>Story</Grid>
            </Grid>
        </StoryRoot>
    );
};

export default Story;
