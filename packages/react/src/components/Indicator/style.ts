import styled from 'styled-components';

import { marginAttributes, propsBlocker } from '../../system';
import { IndicatorRootPropsType } from './type';

const getRootBaseStyle = ({ theme }: IndicatorRootPropsType) =>
    theme.componentOverrides.Indicator.Root.base;

export const IndicatorRoot = styled.div.withConfig(propsBlocker)<
    IndicatorRootPropsType
>`
    box-sizing: border-box;
    position: relative;
    border-radius: 9999px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    &:before {
        content: '!';
    }

    ${getRootBaseStyle};
    ${marginAttributes};
`;
