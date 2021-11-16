import styled, { css } from 'styled-components';
import {
    makeBEM,
    propsBlocker,
    color,
    spacing,
    typography,
    transition,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import {
    StepPropsType,
    StepperPiecePropsType,
    StepperPieceVariant,
} from './type';

const stepPieceClassName = makeBEM('Step', 'Piece');
const stepIconClassName = makeBEM('Step', 'Icon');
const stepNumberClassName = makeBEM('Step', 'Number');
const stepTitleClassName = makeBEM('Step', 'Title');
const stepDescriptionClassName = makeBEM('Step', 'Description');
const stepPieceWrapperClassName = makeBEM('Step', 'Wrapper');
const completeClassName = makeBEM('Step', 'Root', 'complete');
const incompleteClassName = makeBEM('Step', 'Root', 'incomplete');
const activeClassName = makeBEM('Step', 'Root', 'active');
const warningClassName = makeBEM('Step', 'Root', 'warning');
const errorClassName = makeBEM('Step', 'Root', 'error');

const getStepperPieceWrapperRootStyle = ({
    minimal,
    variant,
}: StepperPiecePropsType) => {
    let size;
    let backgroundAndBorderColor;
    if (variant === StepperPieceVariant.active && minimal) {
        size = css`
            height: ${spacing(4)};
            width: ${spacing(4)};
            > .${stepIconClassName}, .${stepNumberClassName} {
                display: none;
            }
        `;
    } else if (minimal) {
        size = css`
            height: ${spacing(2)};
            width: ${spacing(2)};
            > .${stepIconClassName}, .${stepNumberClassName} {
                display: none;
            }
        `;
    } else {
        size = css`
            height: ${spacing(6)};
            width: ${spacing(6)};
        `;
    }

    if (variant === StepperPieceVariant.incomplete) {
        backgroundAndBorderColor = css`
            border-color: ${color('neutral.03')};
        `;
    } else if (variant === StepperPieceVariant.active) {
        backgroundAndBorderColor = css`
            background-color: ${color('primary.07')};
            .${stepNumberClassName} {
                color: ${color('neutral.00')};
            }
        `;
    } else if (variant === StepperPieceVariant.complete) {
        backgroundAndBorderColor = css`
            background-color: ${color('primary.01')};
        `;
    } else if (variant === StepperPieceVariant.warning) {
        backgroundAndBorderColor = css`
            background-color: ${color('warning.02')};
            .${stepNumberClassName} {
                color: ${color('neutral.11')};
            }
        `;
    } else if (variant === StepperPieceVariant.error) {
        backgroundAndBorderColor = css`
            background-color: ${color('error.01')};
            .${stepNumberClassName} {
                color: ${color('neutral.11')};
            }
        `;
    }
    return css`
        ${size};
        ${backgroundAndBorderColor};
    `;
};

const getStepButtonRootStyle = ({ vertical }: { vertical?: boolean }) => {
    let result = {};
    if (vertical) {
        result = css`
            .${stepTitleClassName}, .${stepDescriptionClassName} {
                text-align: left;
            }
        `;
    } else {
        result = css`
            flex-direction: column;
            align-items: center;
            .${stepDescriptionClassName} {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                @supports (-webkit-line-clamp: 2) {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: initial;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        `;
    }
    return result;
};

const getStepRootStyle = ({ vertical }: any) => {
    let result = {};
    if (vertical) {
        result = css`
            min-height: ${spacing(20)};
            margin-bottom: ${spacing(2)};
            .${stepPieceClassName} {
                margin-right: ${spacing(2)};
            }
        `;
    } else {
        result = css`
            width: ${spacing(31)};
            .${stepPieceClassName} {
                margin-right: ${spacing(1)};
                margin-left: ${spacing(1)};
            }
        `;
    }
    return result;
};

const getStepperLineStyle = ({ vertical, variant }: any) => {
    let result = {};
    const background = css`
        background-color: ${variant === StepperPieceVariant.incomplete
            ? color('neutral.03')
            : color('primary.07')};
    `;
    if (vertical) {
        result = css`
            top: ${spacing(8)};
            left: ${spacing(3)};
            width: 1px;
            bottom: 0;
            ${background};
        `;
    } else {
        result = css`
            top: 50%;
            // push to the exterm left and then the 8px for margin
            left: calc(100% + ${spacing(2)});
            width: ${spacing(25)};
            height: 1px;
            ${background};
        `;
    }
    return result;
};

export const StepperLine = styled.div`
    position: absolute;

    ${getStepperLineStyle};
`;

/** 👉 ROOT ELEMENT */
export const StepRoot = styled.div.withConfig(propsBlocker)<StepPropsType>`
    position: relative;
    margin: 0 ${spacing(2)};

    :last-child .${makeBEM('Step', 'Line')} {
        display: none;
    }
    &:not(.${incompleteClassName}, .${activeClassName}) button {
        cursor: pointer;
        :hover {
            .${stepTitleClassName} {
                color: ${color('primary.06')};
            }
        }
    }
    &.${completeClassName}:hover
        .${stepPieceClassName}
        > .${stepPieceWrapperClassName} {
        border: 1px solid ${color('primary.06')};
    }
    &.${warningClassName}:hover
        .${stepPieceClassName}
        > .${stepPieceWrapperClassName} {
        border: 1px solid ${color('warning.07')};
    }
    &.${errorClassName}:hover
        .${stepPieceClassName}
        > .${stepPieceWrapperClassName} {
        border: 1px solid ${color('error.06')};
    }
    &.${warningClassName} .${makeBEM('Step', 'Line')} {
        background-color: ${color('warning.02')};
    }
    &.${errorClassName} .${makeBEM('Step', 'Line')} {
        background-color: ${color('error.02')};
    }

    ${getStepRootStyle};
    ${getComponentOverride('Step')};
`;

export const StepButton = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    padding: 0;
    width: 100%;

    ${getStepButtonRootStyle};
`;

export const StepperPieceWrapper = styled.div.withConfig(propsBlocker)<
    StepperPiecePropsType
>`
    border-radius: 50%;
    border: 1px solid transparent;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    ${transition({ border: true })};

    ${getStepperPieceWrapperRootStyle};
`;

export const StepperPieceRoot = styled.div`
    height: ${spacing(6)};
    width: ${spacing(6)};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${spacing(2)};
`;

export const StepperPieceNumber = styled.p`
    ${typography('paragraphMedium')};
`;
