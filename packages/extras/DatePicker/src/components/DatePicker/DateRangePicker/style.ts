import styled from 'styled-components';
import {
    getComponentOverride,
    marginProps,
    propsBlocker,
    reset,
    token,
    typography,
    widthProps,
} from '@deliveryhero/armor-system';

import { DateRangePickerPropsType } from './type';
import { getRootStyle } from '../style';

/** 👉 ROOT ELEMENT */
export const DateRangePickerRoot = styled.div.withConfig(
    propsBlocker,
)<DateRangePickerPropsType>`
    ${reset()};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    display: inline-block;
    position: relative;
    ${getRootStyle};
    ${getComponentOverride('DateRangePicker')};
    ${marginProps};
    ${widthProps};
`;
