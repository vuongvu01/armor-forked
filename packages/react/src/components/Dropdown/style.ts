import styled from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system/attributes';
import { makePropList, shouldForwardProp } from '../../utils';
import {
    DropdownRootPropsType,
    ExpansionIndicatorContainerPropsType,
} from './type';
import { ExpansionIndicator } from '../ExpansionIndicator';
import { spacing } from '../../system/mixins';
import { TextInput } from '../TextInput';
import { TextInputPropsType } from '../TextInput/type';

const propertyList = makePropList(['formatOption']);

export const DropdownRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DropdownRootPropsType>`
    display: inline-flex;

    ${marginAttributes};
    ${widthAttributes};
`;

export const DropdownContainer = styled.div<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const DropdownOptionListContainer = styled.div<DropdownRootPropsType>`
    box-sizing: border-box;
    position: relative;
`;

export const ExpansionIndicatorContainer = styled.div<
    ExpansionIndicatorContainerPropsType
>`
    height: ${spacing(10)};
`;
export const DropdownExpansionIndicator = styled(ExpansionIndicator)<
    ExpansionIndicatorContainerPropsType
>`
    cursor: pointer;
    .ExpansionIndicator-Content {
        width: 56px;
    }
`;

export const DropdownTextInput = styled(TextInput)<TextInputPropsType>`
    .TextInput-Input {
        cursor: pointer;
    }
`;
