import styled, { css } from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';

import {
    ExpansionIndicatorContentPropsType,
    ExpansionIndicatorIconPropsType,
    ExpansionIndicatorRootPropsType,
} from './type';
import { transitionDurationInSec } from '../../constants';
import {
    marginAttributes,
    color,
    transition,
    propsBlocker,
    expansion,
} from '../../system';

const expansionIndicatorContainerStyle = ({
    disabled,
}: ExpansionIndicatorRootPropsType) =>
    disabled
        ? css`
              cursor: not-allowed;
          `
        : {};

const expansionIndicatorIconStyle = ({
    disabled,
}: ExpansionIndicatorIconPropsType) =>
    disabled
        ? css`
              cursor: not-allowed;
              color: ${color('neutral.04')};
          `
        : {};

const actionSeparator = ({
    displaySeparator,
}: ExpansionIndicatorContentPropsType) =>
    displaySeparator
        ? css`
              border-left-color: ${color('neutral.03')};
          `
        : {};

/** 👉 ROOT ELEMENT */
export const ExpansionIndicatorRoot = styled.div.withConfig(propsBlocker)<
    ExpansionIndicatorRootPropsType
>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;

    ${expansionIndicatorContainerStyle};
    ${marginAttributes};
`;

export const ExpansionIndicatorContent = styled.div.withConfig(propsBlocker)<
    ExpansionIndicatorContentPropsType
>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: calc(100% - 16px);
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s;
    width: 100%;

    ${actionSeparator};
`;

export const ExpansionIndicatorIcon = styled(ArrowDownIcon)<
    ExpansionIndicatorIconPropsType
>`
    color: ${color('primary.main')};
    ${transition({ transform: true })};
    ${expansion(180)};

    ${expansionIndicatorIconStyle};
`;
