import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { Message, MessageAction } from '../Message';
import { ProgressBar } from '../ProgressBar';
import { useToast, useToastClassNames } from './hooks';
import { ToastRoot, ProgressBarContainer } from './style';
import { ToastPropsType } from './type';
import {
    TOAST_CLASS_PREFIX,
    ToastLevels,
    progressBarRootTestId,
    ToastPositions,
} from './constants';

/**
 * # Toast
 *
 * The toast is used to show alerts on top of an overlay. The toast will close itself when the close button is clicked, or after a timeout — the default is 5 seconds. The toast component is used to give feedback to users after an action has taken place.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/77b2f7-toast/b/93e007)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Button, useToast } from '@deliveryhero/armor';
 *
 * const { makeToast } = useToast();
 *
 * <Button onClick={() => makeToast({ message: 'This is awesome!' })}>
 *     Show Toast
 * </Button>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Toast = forwardRef<HTMLDivElement, ToastPropsType>(function Toast(
    { className, children, ...props },
    ref,
) {
    const classNames = useToastClassNames(TOAST_CLASS_PREFIX, className);

    const {
        rootProps,
        getMessageProps,
        getProgressBarContainerProps,
        getProgressBarProps,
        autoClose,
        message,
        showAction,
        getActionProps,
        getActionLabel,
    } = useToast<HTMLDivElement>(props, ref);

    return (
        <ToastRoot {...rootProps} className={classNames.Root}>
            <Message
                {...getMessageProps()}
                actions={
                    showAction ? (
                        <MessageAction {...getActionProps()}>
                            {getActionLabel()}
                        </MessageAction>
                    ) : null
                }
            >
                {message || children}
            </Message>
            {autoClose && (
                <ProgressBarContainer
                    data-testid={progressBarRootTestId}
                    {...getProgressBarContainerProps()}
                >
                    <ProgressBar {...getProgressBarProps()} />
                </ProgressBarContainer>
            )}
        </ToastRoot>
    );
});

Toast.defaultProps = {
    disableCloseButton: false,
    disableIcon: false,
    error: false,
    warning: false,
    info: false,
    success: false,
    showProgressBar: true,
    autoClose: true,
};

Toast.propTypes = {
    /** The id will automatically be generated when adding a new toast */
    id: PropTypes.string.isRequired,
    /** The toast message */
    message: PropTypes.string.isRequired,
    /** Toast level */
    level: PropTypes.oneOf([
        ToastLevels.SUCCESS,
        ToastLevels.INFO,
        ToastLevels.WARNING,
        ToastLevels.ERROR,
    ]),
    /** Toast level: error */
    error: PropTypes.bool,
    /** Toast level: warning */
    warning: PropTypes.bool,
    /** Toast level: info */
    info: PropTypes.bool,
    /** Toast level: success */
    success: PropTypes.bool,
    /** Show progress bar when auto close is enable */
    showProgressBar: PropTypes.bool,
    /** A callback is fired when toast is closed */
    onClose: PropTypes.func,
    /** Show/hide close button */
    disableCloseButton: PropTypes.bool,
    /** Show/hide toast level icon */
    disableIcon: PropTypes.bool,
    /** Enable auto close */
    autoClose: PropTypes.bool,
    /** Action button */
    action: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }),
    /** Put the progress bar auto run on hold */
    isPaused: PropTypes.bool,
    /** Set the pause status to the toast container */
    setPauseAutoClose: PropTypes.func,
    /** Position of the toast */
    position: PropTypes.oneOf([
        ToastPositions.TOP_RIGHT,
        ToastPositions.TOP_LEFT,
        ToastPositions.BOTTOM_RIGHT,
        ToastPositions.BOTTOM_LEFT,
    ]),
};

export const MemoizedToast = memo(Toast);
