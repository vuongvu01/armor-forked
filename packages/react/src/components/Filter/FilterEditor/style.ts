import styled, { css } from 'styled-components';
import {
    FilterEditorRootPropsType,
    FilterEditorConditionsPropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    paddingAttributes,
    notLastChild,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const FilterEditorRoot = styled.div.withConfig(propsBlocker)<
    FilterEditorRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    ${getComponentOverride('FilterEditor')};
    ${marginAttributes};
    ${paddingAttributes};
`;

const getConditionsStyle = ({ vertical }: FilterEditorConditionsPropsType) => {
    let result = {};

    if (vertical) {
        result = css`
            ${result};
            flex-direction: column;

            > ${notLastChild} {
                margin-bottom: ${spacing(8)};
            }
        `;
    } else {
        result = css`
            ${result};
            flex-wrap: wrap;
            align-items: flex-start;

            > * {
                margin-right: ${spacing(6)};
                margin-bottom: ${spacing(6)};
            }
            margin-bottom: -${spacing(6)};
        `;
    }

    return result;
};

export const FilterEditorConditions = styled.div.withConfig(propsBlocker)<
    FilterEditorConditionsPropsType
>`
    display: flex;
    ${getConditionsStyle};
`;
