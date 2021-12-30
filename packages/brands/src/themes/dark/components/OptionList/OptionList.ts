import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getOptionListOverride = () => css`
    .OptionList-BeforeSectionContainer {
        border-bottom: solid 1px ${color('neutral.08')};
    }
    background-color: ${color('neutral.09')};
`;
