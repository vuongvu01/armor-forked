import { css } from 'styled-components';
import { color, colorGrey60, colorGrey70 } from '@deliveryhero/armor-system';

export const getOptionListOverride = () => css`
    .OptionList-BeforeSectionContainer {
        border-bottom: solid 1px ${color(colorGrey60)};
    }
    background-color: ${color(colorGrey70)};
`;
