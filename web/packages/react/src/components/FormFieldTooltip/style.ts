import styled, { css } from 'styled-components';

import { ObjectLiteralType } from 'src/type';
import { shouldForwardProp } from 'src/utils';
import {
    FormFieldTooltipIndicatorPropsType,
    FormFieldTooltipRootPropsType,
} from './type';
import { Tooltip } from '../Tooltip';
import { Indicator } from '../Indicator';

const propertyList = {
    visible: true,
    tooltipStyles: true,
    indicatorStyles: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: FormFieldTooltipRootPropsType) =>
    theme.componentOverrides.FormFieldTooltip.Root.base;

export const FormFieldTooltipRoot = styled(Tooltip).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FormFieldTooltipRootPropsType>`
    ${getRootBaseStyle}
    ${(props: FormFieldTooltipRootPropsType) => props.tooltipStyles(props)}
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

export const FormFieldTooltipIndicator = styled(Indicator).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FormFieldTooltipIndicatorPropsType>`
    position: absolute;

    ${getIndicatorBaseStyle}
    ${getIndicatorDynamicStyle}
    ${(props: FormFieldTooltipRootPropsType) => props.indicatorStyles(props)}
`;
