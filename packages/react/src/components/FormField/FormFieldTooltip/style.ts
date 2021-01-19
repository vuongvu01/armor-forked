import styled, { css } from 'styled-components';

import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';
import {
    FormFieldTooltipIndicatorPropsType,
    FormFieldTooltipRootPropsType,
} from './type';
import { Tooltip } from '../../Tooltip';
import { Indicator } from '../../Indicator';

const propertyList = {
    visible: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: FormFieldTooltipRootPropsType) =>
    theme.componentOverrides.FormFieldTooltip.Root.base;

export const FormFieldTooltipRoot = styled(Tooltip).withConfig(
    getPropsBlocker(propertyList, false),
)<FormFieldTooltipRootPropsType>`
    ${getRootBaseStyle}
`;

const getIndicatorBaseStyle = ({ theme }: FormFieldTooltipIndicatorPropsType) =>
    theme.componentOverrides.FormFieldTooltip.Indicator.base;

const getIndicatorDynamicStyle = ({
    visible,
}: FormFieldTooltipIndicatorPropsType) =>
    visible
        ? ''
        : css`
              opacity: 0;
              pointer-events: none;
          `;

export const FormFieldTooltipIndicator = styled(Indicator).withConfig(
    getPropsBlocker(propertyList, false),
)<FormFieldTooltipIndicatorPropsType>`
    position: absolute;

    ${getIndicatorBaseStyle}
    ${getIndicatorDynamicStyle}
`;
