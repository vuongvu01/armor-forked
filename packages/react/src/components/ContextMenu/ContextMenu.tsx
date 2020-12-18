import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useContextMenuClassNames } from './utils/useContextMenuClassNames';
import { useContextMenu } from './utils/useContextMenu';
import { ContextMenuRoot, ContextMenuArrow } from './style';
import { ContextMenuPropsType } from './type';
import { CONTEXTMENU_CLASS_PREFIX } from './constants';
import { MenuElement } from '../Menu/MenuElement';

export const ContextMenu: FunctionComponent<ContextMenuPropsType> = forwardRef(
    function ContextMenu({ className, ...props }, ref) {
        const theme = useComponentTheme(CONTEXTMENU_CLASS_PREFIX);
        const classNameComponents = useContextMenuClassNames(
            CONTEXTMENU_CLASS_PREFIX,
            className,
        );

        const {
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
                    <ContextMenuRoot
                        {...rootProps}
                        theme={theme}
                        className={classNameComponents.Root}
                    >
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
                        <ContextMenuArrow
                            theme={theme}
                            className={classNameComponents.Arrow}
                            {...arrowProps}
                        />
                    </ContextMenuRoot>
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
