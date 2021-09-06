import { muiSpacing, muiTypography } from '@gannochenko/ui.styled-components';
import styled from 'styled-components';
import { Link } from '../Link';

export const StoryStoryLink = styled(Link)`
    ${muiTypography('small')};
    display: block;
    margin-bottom: ${muiSpacing(2)};
`;
