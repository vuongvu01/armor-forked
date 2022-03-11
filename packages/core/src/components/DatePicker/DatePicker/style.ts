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
import { DatePickerRootPropsType } from './type';
import { getRootStyle } from '../style';

/** 👉 ROOT ELEMENT */
export const DatePickerRoot = styled.div.withConfig(
    propsBlocker,
)<DatePickerRootPropsType>`
    ${reset()};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    display: inline-block;
    position: relative;

    ${getRootStyle};
    ${getComponentOverride('DatePicker')};
    ${marginProps};
    ${widthProps};
`;
