import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useSideSheetClassName } from './hooks/useSideSheetClassName';
import { SideSheetPropsType } from './type';
import { Backdrop } from '../Backdrop';
// @ts-ignore until the deprecated CloseIcon is removed and we rename Close to CloseIcon
import {
    SideSheetRoot,
    SideSheetWindow,
    SideSheetContent,
    SideSheetHeaderContainer,
    SideSheetCloseButton,
} from './style';
import { SIDE_SHEET_CLASS_PREFIX } from './constants';
import { PortalToBody } from '../../system/util/PortalToBody';
import { useSideSheet } from './hooks/useSideSheet';
import { extendChildrenWithProps, extractContentSections } from './utils';

/**
 * @armor-docs-component
 */
export const SideSheet = forwardRef<HTMLDivElement, SideSheetPropsType>(
    function SideSheet({ className, children, ...props }, ref) {
        const theme = useComponentTheme(SIDE_SHEET_CLASS_PREFIX);

        const {
            portalProps,
            rootProps,
            getBackdropProps,
            windowProps,
            contentProps,
            headerContainerProps,
            getCloseButtonProps,

            enableBackdrop,
            enableCloseButton,
            wide,
            isFixed,
        } = useSideSheet(props, ref);

        const classOverride = useSideSheetClassName(
            SIDE_SHEET_CLASS_PREFIX,
            className,
            !enableBackdrop,
            wide,
        );

        // todo: since we don't clone children and use react context instead, better to remove this soon
        const childrenWithExtendedProps = extendChildrenWithProps(children, {
            classOverride,
            isFixed,
            theme,
        });
        const { header, body, footer } = extractContentSections(
            childrenWithExtendedProps,
        );

        return (
            <PortalToBody {...portalProps}>
                <SideSheetRoot
                    {...rootProps}
                    className={classOverride.Root}
                    theme={theme}
                >
                    {enableBackdrop && (
                        <Backdrop
                            {...getBackdropProps()}
                            className={classOverride.Backdrop}
                        />
                    )}
                    <SideSheetWindow
                        {...windowProps}
                        className={classOverride.Window}
                        theme={theme}
                    >
                        <SideSheetContent
                            {...contentProps}
                            className={classOverride.Content}
                            theme={theme}
                        >
                            <SideSheetHeaderContainer
                                {...headerContainerProps}
                                className={classOverride.HeaderContainer}
                                theme={theme}
                            >
                                {header}
                                {enableCloseButton ? (
                                    <SideSheetCloseButton
                                        theme={theme}
                                        {...getCloseButtonProps()}
                                    />
                                ) : null}
                            </SideSheetHeaderContainer>
                            {body}
                            {footer}
                        </SideSheetContent>
                    </SideSheetWindow>
                </SideSheetRoot>
            </PortalToBody>
        );
    },
);

SideSheet.displayName = SIDE_SHEET_CLASS_PREFIX;

SideSheet.defaultProps = {
    disableOverlay: false,
    disableEffects: false,
    disableCloseByEscape: false,
    isCloseButtonVisible: true,
    isFixed: true,
    open: false,
    wide: false,
};

SideSheet.propTypes = {
    disableEffects: PropTypes.bool,
    disableOverlay: PropTypes.bool,
    disableCloseByEscape: PropTypes.bool,
    isCloseButtonVisible: PropTypes.bool,
    isFixed: PropTypes.bool,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    /** Tells the dialog to occupy the larger or the smaller line segment according to the ~ of the Golden Ration */
    wide: PropTypes.bool,
};
