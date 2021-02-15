import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useContextMenuClassNames } from './hooks/useContextMenuClassNames';
import { useContextMenu } from './hooks/useContextMenu';
import { ContextMenuRoot, ContextMenuArrow } from './style';
import { ContextMenuPropsType } from './type';
import { CONTEXTMENU_CLASS_PREFIX } from './constants';
import { MenuElement } from '../Menu';
import { PortalToBody } from '../../system/util/PortalToBody';

export const ContextMenu: FunctionComponent<ContextMenuPropsType> = forwardRef(
    function ContextMenu({ className, ...props }, ref) {
        const theme = useComponentTheme(CONTEXTMENU_CLASS_PREFIX);
        const classNameComponents = useContextMenuClassNames(
            CONTEXTMENU_CLASS_PREFIX,
            className,
        );

        const {
            portalProps,
            rootProps,
            arrowProps,
            trigger,
            open,
            displayChildren,
            displayMenuElements,
            menuElements,
            children,
        } = useContextMenu(props, ref);

        return (
            <>
                {trigger}
                {open && (
                    <PortalToBody {...portalProps}>
                        <ContextMenuRoot
                            {...rootProps}
                            theme={theme}
                            className={classNameComponents.Root}
                        >
                            <ContextMenuArrow
                                theme={theme}
                                className={classNameComponents.Arrow}
                                {...arrowProps}
                            />
                            {displayChildren && children}
                            {displayMenuElements &&
                                menuElements.map(
                                    ({ id, label, props: elementProps }) => (
                                        <MenuElement
                                            {...elementProps}
                                            key={id}
                                            small
                                        >
                                            {label}
                                        </MenuElement>
                                    ),
                                )}
                        </ContextMenuRoot>
                    </PortalToBody>
                )}
            </>
        );
    },
);

ContextMenu.defaultProps = {
    align: 'bottom',
};

/** prop-types are required here for run-time checks */
ContextMenu.propTypes = {
    open: PropTypes.bool,
    onToggle: PropTypes.func,
    // align: PropTypes.string,
};
