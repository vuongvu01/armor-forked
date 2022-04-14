import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { PortalToBody } from '@deliveryhero/armor-system';

import { useContextMenuClassNames } from './hooks/useContextMenuClassNames';
import { useContextMenu } from './hooks/useContextMenu';
import { ContextMenuRoot, ContextMenuArrow } from './style';
import { ContextMenuPropsType } from './type';
import { CONTEXTMENU_CLASS_PREFIX } from './constants';
import { MenuElement } from '../Menu';

/**
 * # ContextMenu
 *
 * Use them to show additional options and when you run out of space.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/9007ed-context-menu/b/36609d)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { ContextMenu, IconButton } from '@deliveryhero/armor';
 * import { EllipsisVerticalIcon } from '@deliveryhero/armor-icons';
 *
 * <ContextMenu
 *     trigger={
 *         <IconButton>
 *             <EllipsisVerticalIcon large />
 *         </IconButton>
 *     }
 *     menuElements={[
 *         {
 *             id: 'save',
 *             label: 'Save',
 *             props: {
 *                 onClick: () => alert('Saving'),
 *             },
 *         },
 *         {
 *             id: 'del',
 *             label: 'Delete',
 *             props: {
 *                 onClick: () => alert('Delete'),
 *             },
 *         },
 *     ]}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuPropsType>(
    function ContextMenu({ className, ...props }, ref) {
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
                            className={classNameComponents.Root}
                        >
                            <ContextMenuArrow
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
