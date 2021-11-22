import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { muiSpacing } from '@gannochenko/ui.styled-components';

export const ThemeSelectorRoot = styled.div`
    position: fixed;
    top: ${muiSpacing(15)};
    right: ${muiSpacing(5)};
`;

export const ThemeSelectorButton = styled(Button)`
    background-color: white;
    & :hover,
    :active,
    :focus {
        background-color: white;
    }
`;
