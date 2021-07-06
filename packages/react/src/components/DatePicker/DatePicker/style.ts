import styled from 'styled-components';
import {
    getComponentOverride,
    marginAttributes,
    propsBlocker,
    reset,
    typography,
    widthAttributes,
} from '../../../system';
import { DatePickerRootPropsType } from './type';
import { getRootStyle } from '../style';

/** 👉 ROOT ELEMENT */
export const DatePickerRoot = styled.div.withConfig(propsBlocker)<
    DatePickerRootPropsType
>`
    ${reset()};
    ${typography('paragraphMedium')};
    display: inline-block;
    position: relative;

    ${getRootStyle};
    ${getComponentOverride('DatePicker')};
    ${marginAttributes};
    ${widthAttributes};
`;
