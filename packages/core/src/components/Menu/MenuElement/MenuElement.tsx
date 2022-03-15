import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useMenuElementClassNames } from './utils/useMenuElementClassNames';
import {
    MenuElementRoot,
    MenuElementContent,
    MenuElementExpansionHandle,
} from './style';
import { MenuElementPropsType } from './type';
import { MENU_ELEMENT_CLASS_PREFIX } from './constants';
import { useMenuElement } from './hooks/useMenuElement';
import { ExpansionIndicator } from '../../ExpansionIndicator';

/**
 * @armor-docs-component
 */
export const MenuElement = forwardRef<HTMLDivElement, MenuElementPropsType>(
    function MenuElement({ className, children, ...props }, ref) {
        const classNameComponents = useMenuElementClassNames(
            MENU_ELEMENT_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            contentProps,
            getExpansionHandleArrowProps,
            Tag,
            enableExpansionHandle,
        } = useMenuElement(props);

        return (
            <MenuElementRoot
                {...rootProps}
                className={classNameComponents.Root}
            >
                {(forwardedProps: MenuElementPropsType) => (
                    <Tag {...forwardedProps} ref={ref}>
                        <MenuElementContent
                            {...contentProps}
                            className={classNameComponents.Content}
                        >
                            {children}
                        </MenuElementContent>
                        {enableExpansionHandle && (
                            <MenuElementExpansionHandle
                                className={classNameComponents.ExpansionHandle}
                            >
                                <ExpansionIndicator
                                    {...getExpansionHandleArrowProps()}
                                    className={
                                        classNameComponents.ExpansionHandleArrow
                                    }
                                />
                            </MenuElementExpansionHandle>
                        )}
                    </Tag>
                )}
            </MenuElementRoot>
        );
    },
);

MenuElement.defaultProps = {
    primary: false,
    secondary: false,
    tertiary: false,
    selected: false,
    enableExpansionHandle: false,
    expanded: false,
};

/** prop-types are required here for run-time checks */
MenuElement.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    selected: PropTypes.bool,
    enableExpansionHandle: PropTypes.bool,
    expanded: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
};
