import React, { FC } from 'react';
import { StoryPageContentPropsType } from './type';
import { Container } from '../../Container';
import { StoryPageContentRoot, StoryPageContentTitle } from './style';

export const StoryPageContent: FC<StoryPageContentPropsType> = ({
    title,
    Story,
}) => {
    return (
        <StoryPageContentRoot>
            <Container maxWidth="md">
                <StoryPageContentTitle
                    variant="h1"
                    component="h1"
                    enableVerticalGutter
                >
                    {title}
                </StoryPageContentTitle>
                {!!Story && <Story />}
            </Container>
        </StoryPageContentRoot>
    );
};
