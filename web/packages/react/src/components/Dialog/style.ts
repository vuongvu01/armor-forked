import styled, { css } from 'styled-components';
import { fixedCover } from '../../system/mixins';
import { DialogRootStylePropsType } from './type';
import { Paper } from '../Paper';
import { sizeAttributes } from '../../system/attributes';
import { DIALOG_SCROLL_DOCUMENT } from './Dialog';

const dialogContainerOverflow = ({ scroll }: DialogRootStylePropsType) => {
    if (scroll === DIALOG_SCROLL_DOCUMENT) {
        return 'auto';
    }

    return 'unset';
};

const dialogContainerDisplay = ({
    display,
    scroll,
}: DialogRootStylePropsType) => {
    if (!display) {
        return 'none';
    }

    return scroll === DIALOG_SCROLL_DOCUMENT ? 'block' : 'flex';
};

const dialogRootDisplay = ({ scroll }: DialogRootStylePropsType) => {
    return scroll === DIALOG_SCROLL_DOCUMENT ? 'inline-block' : 'flex';
};

const dialogRootMaxHeight = ({ scroll, theme }: DialogRootStylePropsType) => {
    return scroll === DIALOG_SCROLL_DOCUMENT
        ? 'none'
        : `calc(100% - ${theme.components.Dialog.Root.safeMargin})`;
};

export const DialogOverlay = styled.div<DialogRootStylePropsType>`
    ${fixedCover}
    z-index: inherit;
    pointer-events: none;
    ${({ display, effectToggle, disableEffects, theme }) => css`
        opacity: ${effectToggle ? 1 : 0};
        display: ${display ? 'initial' : 'none'};
        transition: ${disableEffects ? 'none' : 'opacity 100ms ease'};
        ${theme.components.Dialog.Overlay.base}
    `}

    ${props => props.styles(props)}
`;

export const DialogContainer = styled.div<DialogRootStylePropsType>`
    ${fixedCover}
    z-index: inherit;
    align-items: center;
    justify-content: center;
    text-align: center;

    overflow-y: ${dialogContainerOverflow};
    display: ${dialogContainerDisplay};

    ${({ disableCloseButton, theme }) =>
        !disableCloseButton
            ? css`
                  .DialogTitle-Text {
                      ${theme.components.Dialog.Container['DialogTitle-Text']}
                  }
              `
            : ''},

    ${props => props.styles(props)}
`;

export const DialogRoot = styled(Paper)<DialogRootStylePropsType>`
    flex-direction: column;
    text-align: left;

    display: ${dialogRootDisplay};
    max-height: ${dialogRootMaxHeight};

    ${({ disableEffects, effectToggle, theme }) => css`
        transition: ${disableEffects
            ? 'none'
            : 'transform 100ms ease, opacity 100ms ease'};
        transform: translateY(${effectToggle ? 0 : '20px'});
        opacity: ${effectToggle ? 1 : 0};

        ${theme.components.Dialog.Root.base}
    `}

    ${sizeAttributes}
    ${props => props.dialogStyles(props)}
`;

export const DialogCloseButton = styled.div<DialogRootStylePropsType>`
    position: absolute;
    border: 0 none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    flex: 0 0 auto;
    ${({ theme }) => theme.components.Dialog.CloseButton.base}

    ${props => props.styles(props)}
`;
