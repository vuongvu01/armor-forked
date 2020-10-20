import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import {
    extendChildrenWithProps,
    extractContentSections,
    useSideSheetClassName,
    useSideSheetStylesOverride,
} from './utils';
import { SideSheetPropsType } from './type';
import { sideSheetDefaultTheme } from './theme';
import { Modal } from '../Modal';
import { useDisplay } from '../Modal/utils/useDisplay';
import { Overlay } from '../Overlay';
// @ts-ignore until the deprecated CloseIcon is removed and we rename Close to CloseIcon
import { CloseIcon } from '../../icons';
import {
    iconStyle,
    SideSheetRoot,
    SideSheetContent,
    SideSheetHeaderCloseButtonContainer,
    SideSheetHeaderCloseButtonContent,
    SideSheetHeaderContainer,
} from './style';
import {
    sideSheetContent,
    sideSheetHeaderCloseButtonContainer,
    sideSheetHeaderContainer,
    sideSheetRoot,
    SIDE_SHEET_CLASS_PREFIX,
} from './constants';

export const SideSheet: FunctionComponent<SideSheetPropsType> = forwardRef(
    function SideSheet(
        {
            children,
            className,
            classNames,
            disableEffects,
            disableCloseByEscape,
            disableOverlay,
            isCloseButtonVisible,
            isFixed,
            onClose,
            open,
            styles,
            wide,
            zIndex,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            SIDE_SHEET_CLASS_PREFIX,
            sideSheetDefaultTheme,
        );
        const [display, effectToggle] = useDisplay(open);

        const stylesOverride = useSideSheetStylesOverride(styles);

        const classOverride = useSideSheetClassName(
            SIDE_SHEET_CLASS_PREFIX,
            className,
            classNames,
            disableOverlay,
            wide,
        );

        const childrenWithExtendedProps = extendChildrenWithProps(children, {
            classOverride,
            isFixed,
            theme,
        });

        const { header, body, footer } = extractContentSections(
            childrenWithExtendedProps,
        );

        return (
            <Modal
                disableBackdrop={disableOverlay}
                disableCloseByEscape={disableCloseByEscape}
                onClose={onClose}
                open={open}
                zIndex={zIndex}
            >
                <Overlay
                    className={classOverride.Overlay}
                    disableEffects={disableEffects}
                    disableOverlay={disableOverlay}
                    open={display}
                    effectToggle={effectToggle}
                    styles={stylesOverride.Overlay}
                    theme={theme}
                />
                <SideSheetRoot
                    data-testid={sideSheetRoot}
                    {...restProps}
                    className={classOverride.Root}
                    disableEffects={disableEffects}
                    display={display}
                    effectToggle={effectToggle}
                    ref={ref}
                    theme={theme}
                    wide={wide}
                >
                    <SideSheetContent
                        className={classOverride.Content}
                        data-testid={sideSheetContent}
                        theme={theme}
                    >
                        <SideSheetHeaderContainer
                            className={classOverride.HeaderContainer}
                            data-testid={sideSheetHeaderContainer}
                            theme={theme}
                        >
                            {header}
                            {isCloseButtonVisible ? (
                                <SideSheetHeaderCloseButtonContainer
                                    className={classOverride.CloseIcon}
                                    data-testid={
                                        sideSheetHeaderCloseButtonContainer
                                    }
                                    theme={theme}
                                >
                                    <SideSheetHeaderCloseButtonContent
                                        theme={theme}
                                    >
                                        <CloseIcon
                                            onClick={onClose}
                                            style={iconStyle}
                                            tabIndex={0}
                                        />
                                    </SideSheetHeaderCloseButtonContent>
                                </SideSheetHeaderCloseButtonContainer>
                            ) : null}
                        </SideSheetHeaderContainer>
                        {body}
                        {footer}
                    </SideSheetContent>
                </SideSheetRoot>
            </Modal>
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
