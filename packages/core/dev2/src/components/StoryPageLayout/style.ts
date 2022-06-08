import {
    muiColor,
    muiSpacing,
    muiTypography,
} from '@gannochenko/ui.styled-components';
import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from '../Link';

export const StoryComponentLink = styled(Link)`
    ${muiTypography('body1')};
    display: block;
    margin-bottom: ${muiSpacing(2)};
    text-decoration: unset;
`;

export const StoryStoryLink = styled(Link).withConfig({
    shouldForwardProp: (property) => property !== 'isActive',
})`
    ${muiTypography('small')};
    display: block;
    margin-bottom: ${muiSpacing(2)};
    margin-left: ${muiSpacing(4)};
    text-decoration: unset;

    ${(p) =>
        p.isActive &&
        css`
            font-weight: bold;
        `}
`;

export const StoryPageContainer = styled(Grid)`
    height: 100%;
    position: relative;
`;

export const StoryPageSidePanel = styled(Grid)`
    background-color: #fff;
    border-right: 1px solid ${muiColor('grey.300')};
`;
