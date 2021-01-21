import styled from 'styled-components';
import { DatePickerActionBarRootPropsType } from './type';
import { makePropList, getPropsBlocker } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { pixelToRem, reset, spacing, typography } from '../../../system/mixins';
import { Button } from '../../Button';
import { fontSize02, fontSize03 } from '../../../tokens';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    // 'exampleProperty',
]);

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const DatePickerActionBarRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DatePickerActionBarRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    padding: 0 ${spacing(4)} ${spacing(4)} ${spacing(4)};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${getComponentOverride('DatePickerActionBar')};
`;

export const DatePickerActionBarButton = styled(Button).attrs({
    tertiary: true,
})`
    // todo: use regular typography here
    font-size: ${pixelToRem(fontSize02)};
    line-height: ${pixelToRem(fontSize03)};
`;
