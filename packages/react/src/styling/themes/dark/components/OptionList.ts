import { css } from 'styled-components';
import { colorGrey60, colorGrey70 } from '../../../../tokens';
import { color } from '../../../../system/mixins';

export const getOptionListOverride = () => css`
    .OptionList-BeforeSectionContainer {
        border-bottom: solid 1px ${color(colorGrey60)};
    }
    .OptionList-SearchContainer {
        background-color: ${color(colorGrey70)};
    }
`;
