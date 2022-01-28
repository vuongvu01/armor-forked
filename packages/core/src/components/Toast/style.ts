import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    widthProps,
    borderRadius,
    transition,
    focus,
} from '@deliveryhero/armor-system';

import { ToastRootPropsType, ToastHookPropsType } from './type';
import { ToastLevels, ToastPositions } from './constants';

const getRootStyle = ({
    level,
    success,
    error,
    warning,
}: ToastRootPropsType) => {
    let result = css`
        pointer-events: visible;
        position: relative;
        border-radius: ${borderRadius('soft')};
        overflow: hidden;
        min-width: ${spacing(50)};

        .Message-Root {
            border: none;
        }
        .CloseButton-Root:focus-visible {
            border-radius: ${borderRadius('soft')};
        }
    `;

    if (level === ToastLevels.ERROR || error) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('error.06')};
            }
            .Message-Icon,
            .Message-Content,
            .CloseButton-Root,
            .MessageAction-Root {
                color: ${color('neutral.00')};
            }
            .CloseButton-Root {
                ${focus({ mainColor: 'neutral.00' })};
            }
            .CloseButton-Root:hover {
                background-color: ${color('error.04')};
            }
        `;
    } else if (level === ToastLevels.WARNING || warning) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('warning.07')};
            }
            .Message-Icon,
            .Message-Content,
            .CloseButton-Root,
            .MessageAction-Root {
                color: ${color('neutral.11')};
            }
            .CloseButton-Root {
                ${focus({ mainColor: 'neutral.11' })};
            }
            .CloseButton-Root:hover {
                background-color: ${color('warning.05')};
            }
        `;
    } else if (level === ToastLevels.SUCCESS || success) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('success.06')};
            }
            .Message-Icon,
            .Message-Content,
            .CloseButton-Root,
            .MessageAction-Root {
                color: ${color('neutral.11')};
            }
            .CloseButton-Root {
                ${focus({ mainColor: 'neutral.11' })};
            }
            .CloseButton-Root:hover {
                background-color: ${color('success.04')};
            }
        `;
    } else {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('primary.04')};
            }
            .Message-Icon,
            .Message-Content,
            .CloseButton-Root,
            .MessageAction-Root {
                color: ${color('neutral.00')};
            }
            .CloseButton-Root {
                ${focus({ mainColor: 'neutral.00' })};
            }
            .CloseButton-Root:hover {
                background-color: ${color('primary.03')};
            }
        `;
    }

    return result;
};

const getContainerStyle = ({ position, gap }: ToastHookPropsType) => {
    let result = css`
        position: fixed;
        pointer-events: none;
        max-width: ${spacing(100)};
        width: fit-content;

        .ToastContainer-Group {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: ${gap || spacing(3)};
        }
        .ToastContainer-Item {
            ${transition({
                right: true,
                left: true,
                opacity: true,
                transform: true,
            })};
        }
        .ToastContainer-Item.enter {
            opacity: 0;
        }
        .ToastContainer-Item.enter-active {
            opacity: 1;
        }
        .ToastContainer-Item.exit {
            opacity: 1;
        }
        .ToastContainer-Item.exit-active {
            opacity: 0;
            transform: scale(0.85);
        }
    `;

    switch (position) {
        case ToastPositions.TOP_RIGHT:
            result = css`
                ${result};
                top: ${spacing(6)};
                right: ${spacing(6)};

                .ToastContainer-Item.enter {
                    right: -${spacing(5)};
                }
                .ToastContainer-Item.enter-active {
                    right: 0;
                }
            `;
            break;
        case ToastPositions.TOP_LEFT:
            result = css`
                ${result};
                top: ${spacing(6)};
                left: ${spacing(6)};

                .ToastContainer-Group {
                    align-items: flex-start;
                }
                .ToastContainer-Item.enter {
                    left: -${spacing(5)};
                }
                .ToastContainer-Item.enter-active {
                    left: 0;
                }
            `;
            break;
        case ToastPositions.BOTTOM_LEFT:
            result = css`
                ${result};
                bottom: ${spacing(6)};
                left: ${spacing(6)};

                .ToastContainer-Group {
                    flex-direction: column-reverse;
                    align-items: flex-start;
                }
                .ToastContainer-Item.enter {
                    left: -${spacing(5)};
                }
                .ToastContainer-Item.enter-active {
                    left: 0;
                }
            `;
            break;
        case ToastPositions.BOTTOM_RIGHT:
            result = css`
                ${result};
                bottom: ${spacing(6)};
                right: ${spacing(6)};

                .ToastContainer-Group {
                    flex-direction: column-reverse;
                }
                .ToastContainer-Item.enter {
                    right: -${spacing(5)};
                }
                .ToastContainer-Item.enter-active {
                    right: 0;
                }
            `;
            break;

        default:
            result = css`
                ${result};
                top: ${spacing(6)};
                right: ${spacing(6)};

                .ToastContainer-Item.enter {
                    right: -${spacing(5)};
                }
                .ToastContainer-Item.enter-active {
                    right: 0;
                }
            `;
            break;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ToastRoot = styled.div.withConfig(
    propsBlocker,
)<ToastRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};

    ${getRootStyle};
    ${getComponentOverride('Toast')};
    ${marginProps};
`;

export const ToastContainerRoot = styled.div.withConfig(
    propsBlocker,
)<ToastHookPropsType>`
    ${getContainerStyle};
    ${widthProps};
    ${marginProps};
`;

export const ProgressBarContainer = styled.div<{ isHidden?: boolean }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};
`;
