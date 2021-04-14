import styled, { css } from 'styled-components';

import {
    FormFieldTooltipIndicatorPropsType,
    FormFieldTooltipRootPropsType,
} from './type';
import { Tooltip } from '../../Tooltip';
import { Indicator } from '../../Indicator';

const getRootBaseStyle = ({ theme }: FormFieldTooltipRootPropsType) =>
    theme.componentOverrides.FormFieldTooltip.Root.base;

export const FormFieldTooltipRoot = styled(Tooltip)<
    FormFieldTooltipRootPropsType
>`
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

export const FormFieldTooltipIndicator = styled(Indicator)<
    FormFieldTooltipIndicatorPropsType
>`
    position: absolute;

    ${getIndicatorBaseStyle}
    ${getIndicatorDynamicStyle}
`;
