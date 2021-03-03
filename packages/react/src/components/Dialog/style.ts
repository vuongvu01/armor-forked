import styled, { css } from 'styled-components';

import {
    fixedCover,
    reset,
    sizeAttributes,
    spacing,
    zIndex,
} from '../../system';
import { getPropsBlocker } from '../../utils';
import { ObjectLiteralType } from '../../type';
import {
    DialogAlignmentContainerPropsType,
    DialogContentPropsType,
    DialogRootPropsType,
    DialogWindowPropsType,
} from './type';
import { DIALOG_SCROLL_DOCUMENT } from './constants';
import { Card } from '../Card';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { CloseButton } from '../CloseButton/CloseButton';

const propertyList = {
    disableOverlay: true,
    disableEffects: true,
    disableCloseButton: true,
    scroll: true,
    open: true,
    defaultOpen: true,
    onOpenChange: true,
    onClose: true,
    effectToggle: true,
    display: true,
    zIndex: true,

    // add other custom properties here
} as ObjectLiteralType;

export const DialogRoot = styled.div.withConfig(getPropsBlocker(propertyList))<
    DialogRootPropsType
>`
    ${reset};
    ${zIndex};
    ${getComponentOverride('Dialog')};
`;

const getAlignmentContainerStyle = ({
    scroll,
    display,
    enableCloseButton,
}: DialogAlignmentContainerPropsType) => {
    let containerDisplay = scroll === DIALOG_SCROLL_DOCUMENT ? 'block' : 'flex';
    if (!display) {
        containerDisplay = 'none';
    }

    let result = css`
        overflow-y: ${scroll === DIALOG_SCROLL_DOCUMENT ? 'auto' : 'unset'};
        display: ${containerDisplay};
    ` as {};

    if (enableCloseButton) {
        // todo: use context here
        result = css`
            ${result};

            .DialogTitle-Text {
                margin-right: ${spacing(9)};
            }
        `;
    }

    return result;
};

export const DialogAlignmentContainer = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DialogAlignmentContainerPropsType>`
    ${fixedCover};
    z-index: inherit;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${getAlignmentContainerStyle};
`;

const getWindowStyle = ({
    enableEffects,
    effectToggle,
    scroll,
}: DialogWindowPropsType) => {
    return css`
        max-height: ${scroll === DIALOG_SCROLL_DOCUMENT
            ? 'none'
            : css`calc(100% - ${spacing(16)})`};
        display: ${scroll === DIALOG_SCROLL_DOCUMENT ? 'inline-block' : 'flex'};

        transition: ${enableEffects
            ? 'transform 100ms ease, opacity 100ms ease'
            : 'none'};
        transform: translateY(${effectToggle ? 0 : '20px'});
        opacity: ${effectToggle ? 1 : 0};
    `;
};

export const DialogWindow = styled(Card).withConfig(getPropsBlocker({}, false))<
    DialogWindowPropsType
>`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;

    flex-direction: column;
    text-align: left;

    margin: ${spacing(12)};
    min-height: ${spacing(23)};
    min-width: ${spacing(100)};

    ${sizeAttributes};
    ${getWindowStyle};
`;

export const DialogContent = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DialogContentPropsType>`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: auto;
`;

export const DialogCloseButton = styled(CloseButton)`
    margin-top: -${spacing(2)};
    margin-right: -${spacing(2)};
    position: absolute;
    top: ${spacing(6.5)};
    right: ${spacing(6.5)};
`;
