import styled, { css } from 'styled-components';
import { PrimaryIconWrapperPropsType } from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    widthAttributes,
    reset,
    typography,
    color,
    spacing,
    borderRadius,
} from '../../../system';

const getRootStyle = ({
    primaryIconBackgroundColor,
    disabled,
}: PrimaryIconWrapperPropsType) => {
    let result = css`
         {
            background-color: ${primaryIconBackgroundColor};
        }
    ` as {};

    if (disabled) {
        result = css`
            background-color: ${color('neutral.02')};
            color: ${color('neutral.05')};
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const PrimaryIconWrapperRoot = styled.div.withConfig(propsBlocker)<
    PrimaryIconWrapperPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-radius: ${borderRadius('round')};
    height: ${spacing(11)};
    width: ${spacing(11)};

    ${getRootStyle};
    ${getComponentOverride('PrimaryIconWrapper')};
    ${marginAttributes};
    ${widthAttributes};
`;
