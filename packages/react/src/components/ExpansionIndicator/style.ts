import styled, { css } from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';

import { ExpansionIndicatorPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { getPropsBlocker } from '../../utils';
import { color } from '../../system/mixins';
import { transition } from '../../system/mixins/transition';
import { expansion } from '../../system/mixins/expansion';

const propertyList = {
    disabled: true,
};

const expansionIndicatorContainerStyle = ({
    disabled,
}: ExpansionIndicatorPropsType) => css`
    ${disabled
        ? css`
              cursor: not-allowed;
          `
        : ''}
`;

const expansionIndicatorStyle = ({ disabled }: ExpansionIndicatorPropsType) =>
    css`
        ${disabled
            ? css`
                  cursor: not-allowed;
                  color: ${color('neutral.04')};
              `
            : ''}
    `;

const actionSeparator = ({
    displaySeparator,
}: ExpansionIndicatorPropsType) => css`
    ${displaySeparator
        ? css`
              border-left-color: ${color('neutral.03')};
          `
        : ''}
`;

export const ExpansionIndicatorRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<ExpansionIndicatorPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;

    ${expansionIndicatorContainerStyle}
    ${marginAttributes}
`;

export const ExpansionIndicatorContent = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<ExpansionIndicatorPropsType>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: calc(100% - 16px);
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s;
    width: 100%;

    ${actionSeparator}
`;

export const ExpansionIndicatorIcon = styled(ArrowDownIcon).withConfig(
    getPropsBlocker({}, false),
)<ExpansionIndicatorPropsType>`
    color: ${color('primary.main')};
    ${transition({ transform: true })};
    ${expansion(180)};

    ${expansionIndicatorStyle}
`;
