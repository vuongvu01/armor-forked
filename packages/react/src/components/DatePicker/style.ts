import styled, { css } from 'styled-components';
import { CalendarIcon } from '@deliveryhero/armor-icons';
import {
    DatePickerArrowPropsType,
    DatePickerDropdownPropsType,
    DatePickerRootPropsType,
} from './type';
import {
    marginAttributes,
    widthAttributes,
    borderRadius,
    color,
    reset,
    spacing,
    typography,
    zIndex,
} from '../../system';
import { makePropList, getPropsBlocker } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

import { TextInput } from '../TextInput';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'selected',
    'leftEnd',
    'rightEnd',
    'enableTimePicker',
]);

const getRootStyle = ({ enableTimePicker }: DatePickerRootPropsType) => {
    const result = css`
        min-width: ${spacing(enableTimePicker ? 87 : 58)};
    `;

    return result;
};

export const DatePickerRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerRootPropsType>`
    ${reset()};
    ${typography('paragraphMedium')};
    display: inline-block;
    position: relative;

    ${getRootStyle};
    ${getComponentOverride('DatePicker')};
    ${marginAttributes};
    ${widthAttributes};
`;

export const DateRangePickerRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerRootPropsType>`
    ${reset()};
    ${typography('paragraphMedium')};
    display: inline-block;
    position: relative;

    ${getRootStyle};
    ${getComponentOverride('DateRangePicker')};
    ${marginAttributes};
    ${widthAttributes};
`;

export const DatePickerInput = styled(TextInput).withConfig(
    getPropsBlocker(propertyList, false),
)`
    width: 100%;
`;

export const DatePickerInputIcon = styled(CalendarIcon)
    .attrs({ medium: true })
    .withConfig(getPropsBlocker(propertyList, false))`
    margin-right: ${spacing(2)};

    // todo: fix this
    && {
        color: ${color('primary.main')};
    }
`;

export const DatePickerDropdown = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerDropdownPropsType>`
    ${typography('paragraphMedium')};
    border-radius: ${borderRadius('soft')};
    color: ${color('neutral.05')};
    background-color: ${color('neutral.00')};
    min-width: ${spacing(84)};
    ${zIndex};
    ${getComponentOverride('DatePickerDropdown')};

    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
`;

// we have to keep the arrow, even though it is not in the design
// if we don't have it, the popper library screws everything up
export const DatePickerDropdownArrow = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerArrowPropsType>`
    height: 0;
    width: 0;
    visibility: hidden;
`;
