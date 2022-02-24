import styled, { css } from 'styled-components';
import { getComponentOverride, spacing } from '@deliveryhero/armor-system';

import {
    FormFieldTooltipIndicatorPropsType,
    FormFieldTooltipRootPropsType,
} from './type';
import { Tooltip } from '../../Tooltip';
import { Indicator } from '../../Indicator';

/** 👉 ROOT ELEMENT */
export const FormFieldTooltipRoot = styled(
    Tooltip,
)<FormFieldTooltipRootPropsType>`
    ${getComponentOverride('FormFieldTooltip')};
`;

const getIndicatorDynamicStyle = ({
    visible,
}: FormFieldTooltipIndicatorPropsType) =>
    visible
        ? ''
        : css`
              opacity: 0;
              pointer-events: none;
          `;

export const FormFieldTooltipIndicator = styled(
    Indicator,
)<FormFieldTooltipIndicatorPropsType>`
    position: absolute;
    top: ${spacing(-2)};
    right: ${spacing(-2)};
    ${getIndicatorDynamicStyle};
`;
