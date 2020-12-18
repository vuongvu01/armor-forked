import styled, { css } from 'styled-components';

import { fixedCover, sizeAttributes } from '../../system';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';
import {
    DialogAlignmentContainerPropsType,
    DialogCloseButtonPropsType,
    DialogContentPropsType,
    DialogBasePropsType,
} from './type';
import { DIALOG_SCROLL_DOCUMENT } from './Dialog';
import { Card } from '../Card';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const propertyList = {
    disableOverlay: true,
    disableEffects: true,
    disableCloseButton: true,
    scroll: true,
    open: true,
    onClose: true,
    // add other custom properties here

    effectToggle: true,
    display: true,
} as ObjectLiteralType;

const dialogContainerOverflow = ({
    scroll,
}: DialogAlignmentContainerPropsType) => {
    if (scroll === DIALOG_SCROLL_DOCUMENT) {
        return 'auto';
    }

    return 'unset';
};

const dialogContainerDisplay = ({
    display,
    scroll,
}: DialogAlignmentContainerPropsType) => {
    if (!display) {
        return 'none';
    }

    return scroll === DIALOG_SCROLL_DOCUMENT ? 'block' : 'flex';
};

const dialogBaseDisplay = ({ scroll }: DialogBasePropsType) => {
    return scroll === DIALOG_SCROLL_DOCUMENT ? 'inline-block' : 'flex';
};

const dialogBaseMaxHeight = ({ scroll, theme }: DialogBasePropsType) => {
    return scroll === DIALOG_SCROLL_DOCUMENT
        ? 'none'
        : `calc(100% - ${theme.componentOverrides.Dialog.Base.safeMargin})`;
};

export const DialogAlignmentContainer = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogAlignmentContainerPropsType>`
    ${fixedCover};
    z-index: inherit;
    align-items: center;
    justify-content: center;
    text-align: center;

    overflow-y: ${dialogContainerOverflow};
    display: ${dialogContainerDisplay};

    ${({ disableCloseButton, theme }: DialogAlignmentContainerPropsType) =>
        !disableCloseButton
            ? css`
                  .DialogTitle-Text {
                      ${theme.componentOverrides.Dialog.Container[
                          'DialogTitle-Text'
                      ]}
                  }
              `
            : ''},
`;

export const DialogRoot = styled(Card).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogBasePropsType>`
    flex-direction: column;
    text-align: left;

    display: ${dialogBaseDisplay};
    max-height: ${dialogBaseMaxHeight};

    ${({ disableEffects, effectToggle, theme }: DialogBasePropsType) => css`
        transition: ${disableEffects
            ? 'none'
            : 'transform 100ms ease, opacity 100ms ease'};
        transform: translateY(${effectToggle ? 0 : '20px'});
        opacity: ${effectToggle ? 1 : 0};

        ${theme.componentOverrides.Dialog.Base.base}
    `}

    ${sizeAttributes}
    ${getComponentOverride('Dialog')};
`;

export const DialogContent = styled.div<DialogContentPropsType>`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: auto;
`;

export const DialogCloseButton = styled.div<DialogCloseButtonPropsType>`
    position: absolute;
    border: 0 none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    flex: 0 0 auto;
    ${({ theme }: DialogCloseButtonPropsType) =>
        theme.componentOverrides.Dialog.CloseButton.base}
`;
