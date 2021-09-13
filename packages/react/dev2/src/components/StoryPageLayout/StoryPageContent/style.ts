import styled, { css } from 'styled-components';
import { muiSpacing } from '@gannochenko/ui.styled-components';
import { RootThemeType } from '../../../armor/styling/type';
import { Typography } from '../../Typography';

const getStoryPageContentRootStyle = ({ theme }: { theme: RootThemeType }) => {
    if (theme.armor) {
        return css`
            background-color: ${theme.armor.body.backgroundColor};
        `;
    }
    return '';
};

export const StoryPageContentRoot = styled.div`
    padding: ${muiSpacing(15)} ${muiSpacing(5)} 0 ${muiSpacing(5)};
    height: 100%;
    ${getStoryPageContentRootStyle};
`;

const getStoryPageContentTitleStyle = ({ theme }: { theme: RootThemeType }) => {
    if (theme.armor) {
        return css`
            color: ${theme.armor.body.color};
        `;
    }
    return '';
};

export const StoryPageContentTitle = styled(Typography)`
    margin-top: 0;
    ${getStoryPageContentTitleStyle}
`;
