import React, { forwardRef, FC } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useSideSheetClassName } from './utils';
import { SideSheetPropsType } from './type';
import { sideSheetDefaultTheme } from './theme';
import { Overlay } from '../Overlay';
// @ts-ignore until the deprecated CloseIcon is removed and we rename Close to CloseIcon
import { CloseIcon } from '../../icons';
import {
    SideSheetRoot,
    SideSheetWindow,
    SideSheetContent,
    SideSheetHeaderCloseButtonContainer,
    SideSheetHeaderCloseButtonContent,
    SideSheetHeaderContainer,
} from './style';
import { SIDE_SHEET_CLASS_PREFIX } from './constants';
import { PortalToBody } from '../../system/util/PortalToBody';
import { useSideSheet } from './utils/useSideSheet';

export const SideSheet: FC<SideSheetPropsType> = forwardRef(function SideSheet(
    { className, disableOverlay, wide, ...props },
    ref,
) {
    const theme = useComponentTheme(
        SIDE_SHEET_CLASS_PREFIX,
        sideSheetDefaultTheme,
    );

    const classOverride = useSideSheetClassName(
        SIDE_SHEET_CLASS_PREFIX,
        className,
        disableOverlay,
        wide,
    );

    const {
        portalProps,
        rootProps,
        overlayProps,
        windowProps,
        contentProps,
        headerContainerProps,
        closeButtonContainerProps,
        closeButtonContentProps,
        closeButtonIconProps,
        isCloseButtonVisible,
        header,
        body,
        footer,
    } = useSideSheet(
        { classOverride, disableOverlay, wide, ...props },
        ref,
        theme,
    );

    return (
        <PortalToBody {...portalProps}>
            <SideSheetRoot
                {...rootProps}
                className={classOverride.Root}
                theme={theme}
            >
                {!disableOverlay && (
                    <Overlay
                        {...overlayProps}
                        className={classOverride.Overlay}
                        theme={theme}
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
                            {isCloseButtonVisible ? (
                                <SideSheetHeaderCloseButtonContainer
                                    {...closeButtonContainerProps}
                                    className={classOverride.CloseIcon}
                                    theme={theme}
                                >
                                    <SideSheetHeaderCloseButtonContent
                                        {...closeButtonContentProps}
                                        theme={theme}
                                    >
                                        <CloseIcon {...closeButtonIconProps} />
                                    </SideSheetHeaderCloseButtonContent>
                                </SideSheetHeaderCloseButtonContainer>
                            ) : null}
                        </SideSheetHeaderContainer>
                        {body}
                        {footer}
                    </SideSheetContent>
                </SideSheetWindow>
            </SideSheetRoot>
        </PortalToBody>
    );
});

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
