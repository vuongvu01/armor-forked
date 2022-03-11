import styled, { css } from 'styled-components';
import {
    makeBEM,
    propsBlocker,
    color,
    spacing,
    typography,
    transition,
    getComponentOverride,
    token,
} from '@deliveryhero/armor-system';

import {
    StepPropsType,
    StepperPiecePropsType,
    StepperPieceVariant,
    StepRootPropsType,
} from './type';

const stepPieceClassName = makeBEM('Step', 'Piece');
const stepIconClassName = makeBEM('Step', 'Icon');
const stepNumberClassName = makeBEM('Step', 'Number');
const stepTitleClassName = makeBEM('Step', 'Title');
const stepDescriptionClassName = makeBEM('Step', 'Description');
const stepPieceWrapperClassName = makeBEM('Step', 'Wrapper');
const stepButtonClassName = makeBEM('Step', 'Button');
const completeClassName = makeBEM('Step', 'Root', 'complete');
const incompleteClassName = makeBEM('Step', 'Root', 'incomplete');
const activeClassName = makeBEM('Step', 'Root', 'active');
const warningClassName = makeBEM('Step', 'Root', 'warning');
const errorClassName = makeBEM('Step', 'Root', 'error');
const logClassName = makeBEM('Step', 'Root', 'log');
const successClassName = makeBEM('Step', 'Root', 'success');
const infoClassName = makeBEM('Step', 'Root', 'info');
const stepLineClassName = makeBEM('Step', 'Line');

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

    switch (variant) {
        case StepperPieceVariant.incomplete:
            backgroundAndBorderColor = css`
                border-color: ${color('neutral.03')};
            `;
            break;
        case StepperPieceVariant.active:
            backgroundAndBorderColor = css`
                background-color: ${color('primary.07')};
                .${stepNumberClassName} {
                    color: ${color('neutral.00')};
                }
            `;
            break;
        case StepperPieceVariant.complete:
            backgroundAndBorderColor = css`
                background-color: ${color('primary.01')};
            `;
            break;
        case StepperPieceVariant.warning:
            backgroundAndBorderColor = css`
                background-color: ${color('warning.02')};
                .${stepNumberClassName} {
                    color: ${color('neutral.11')};
                }
            `;
            break;
        case StepperPieceVariant.error:
            backgroundAndBorderColor = css`
                background-color: ${color('error.01')};
                .${stepNumberClassName} {
                    color: ${color('neutral.11')};
                }
            `;
            break;
        case StepperPieceVariant.info:
            backgroundAndBorderColor = css`
                background-color: ${color('primary.01')};
            `;
            break;
        case StepperPieceVariant.success:
            backgroundAndBorderColor = css`
                background-color: ${color('success.02')};
            `;
            break;

        default:
            backgroundAndBorderColor = css`
                border-color: ${color('neutral.03')};
            `;
            break;
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

const getStepRootStyle = ({
    vertical,
    isActivityLogView,
}: StepRootPropsType) => {
    let result = css`
        position: relative;
        margin: 0 ${spacing(2)};

        :last-child .${stepLineClassName} {
            display: none;
        }
        &.${warningClassName} .${stepLineClassName} {
            background-color: ${color('warning.03')};
        }
        &.${errorClassName} .${stepLineClassName} {
            background-color: ${color('error.02')};
        }
        &.${logClassName} .${stepLineClassName} {
            background-color: ${color('neutral.03')};
        }
        &.${successClassName} .${stepLineClassName} {
            background-color: ${color('success.03')};
        }
        &.${infoClassName} .${stepLineClassName} {
            background-color: ${color('primary.03')};
        }
    `;

    // set hover selector styles when the Stepper is not in ActivityLog view
    if (!isActivityLogView) {
        result = css`
            ${result}
            &:not(.${incompleteClassName}, .${activeClassName}) .${stepButtonClassName} {
                cursor: pointer;
                &:hover {
                    .${stepTitleClassName} {
                        color: ${color('primary.06')};
                    }
                }
            }
            &.${completeClassName}
                .${stepButtonClassName}:hover
                .${stepPieceWrapperClassName} {
                border: 1px solid ${color('primary.06')};
            }
            &.${warningClassName}
                .${stepButtonClassName}:hover
                .${stepPieceWrapperClassName} {
                border: 1px solid ${color('warning.07')};
            }
            &.${errorClassName}
                .${stepButtonClassName}:hover
                .${stepPieceWrapperClassName} {
                border: 1px solid ${color('error.06')};
            }
        `;
    }

    if (vertical) {
        result = css`
            ${result}
            min-height: ${spacing(20)};
            margin-bottom: ${spacing(2)};
            .${stepPieceClassName} {
                margin-right: ${spacing(2)};
            }
        `;
    } else {
        result = css`
            ${result}
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
        background-color: ${variant === StepperPieceVariant.complete
            ? color('primary.07')
            : color('neutral.03')};
    `;
    if (vertical) {
        result = css`
            top: ${spacing(8)};
            /* minus the line 1px width to make it center */
            left: calc(${spacing(3)} - 1);
            width: 1px;
            bottom: 0;
            ${background};
        `;
    } else {
        result = css`
            top: 50%;
            /* push to the exterm left and then the 8px for margin */
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

export const StepContent = styled.div`
    flex: 1 0;
`;

export const StepperPieceWrapper = styled.div.withConfig(
    propsBlocker,
)<StepperPiecePropsType>`
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
    color: ${token('body.color')};
`;
