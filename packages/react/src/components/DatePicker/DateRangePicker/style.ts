import styled from 'styled-components';
import {
    getComponentOverride,
    marginAttributes,
    propsBlocker,
    reset,
    typography,
    widthAttributes,
} from '../../../system';
import { DateRangePickerPropsType } from './type';
import { getRootStyle } from '../style';

/** 👉 ROOT ELEMENT */
export const DateRangePickerRoot = styled.div.withConfig(propsBlocker)<
    DateRangePickerPropsType
>`
    ${reset()};
    ${typography('paragraphMedium')};
    display: inline-block;
    position: relative;

    ${getRootStyle};
    ${getComponentOverride('DateRangePicker')};
    ${marginAttributes};
    ${widthAttributes};
`;
