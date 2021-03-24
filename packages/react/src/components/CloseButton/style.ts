import styled from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';
import { borderRadius, color, reset, spacing } from '../../system/mixins';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

import { getPropsBlocker } from '../../utils';
import { CloseButtonRootPropsType } from './type';

const propertyList = {};

export const CloseButtonRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<CloseButtonRootPropsType>`
    ${reset()};
    display: flex;
    justify-content: flex-end;
    color: ${color('neutral.06')};
    height: min-content;
    width: min-content;
    cursor: pointer;
    flex: 0 0 auto;
    border: 0 none;
    outline: none;
    &:hover {
        background-color: ${color('neutral.02')};
        border-radius: ${borderRadius('pill')};
    }
    ${getComponentOverride('CloseButton')};
`;

export const CloseButtonIcon = styled(CancelIcon)`
    outline: none;
    margin: ${spacing(2)};
`;
