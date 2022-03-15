import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getOptionListOverride = () => css`
    background-color: ${color('neutral.09')};

    .OptionList-BeforeSectionContainer {
        border-bottom: solid 1px ${color('neutral.08')};
        background-color: ${color('neutral.09')};
    }

    .OptionList-TopGradient {
        background: linear-gradient(
            180deg,
            ${color('neutral.02')} 0%,
            ${color('neutral.02', 0)} 80%
        );
    }

    .OptionList-BottomGradient {
        background: linear-gradient(
            180deg,
            ${color('neutral.02', 0)} 0%,
            ${color('neutral.02')} 80%
        );
    }
`;
