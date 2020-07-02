import styled from 'styled-components';

import { marginAttributes } from '../../system';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';
import { IndicatorRootPropsType } from './type';

const propertyList = {
    exampleProperty: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: IndicatorRootPropsType) =>
    theme.componentOverrides.Indicator.Root.base;

export const IndicatorRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<IndicatorRootPropsType>`
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

    ${getRootBaseStyle}
    ${marginAttributes}
    ${(props: IndicatorRootPropsType) => props.styles(props)}
`;
