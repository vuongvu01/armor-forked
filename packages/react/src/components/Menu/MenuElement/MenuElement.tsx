import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../../utils/hooks';
import { useMenuElementClassNames } from './utils/useMenuElementClassNames';
import {
    MenuElementRoot,
    MenuElementContent,
    MenuElementExpansionHandle,
    MenuElementExpansionHandleArrow,
} from './style';
import { MenuElementPropsType } from './type';
import { MENU_ELEMENT_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';
import { useMenuElement } from './hooks/useMenuElement';

export const MenuElement: FunctionComponent<MenuElementPropsType> = forwardRef(
    function MenuElement({ className, children, ...props }, ref) {
        const theme = useComponentTheme(MENU_ELEMENT_CLASS_PREFIX);
        const classNameComponents = useMenuElementClassNames(
            MENU_ELEMENT_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            contentProps,
            getExpansionHandleProps,
            getExpansionHandleArrowProps,
            Tag,
            enableExpansionHandle,
        } = useMenuElement(props);

        return (
            <MenuElementRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                {(forwardedProps: ButtonPropsType) => (
                    <Tag {...forwardedProps} ref={ref}>
                        <MenuElementContent
                            {...contentProps}
                            theme={theme}
                            className={classNameComponents.Content}
                        >
                            {children}
                        </MenuElementContent>
                        {enableExpansionHandle && (
                            <MenuElementExpansionHandle
                                {...getExpansionHandleProps()}
                                theme={theme}
                                className={classNameComponents.ExpansionHandle}
                            >
                                <MenuElementExpansionHandleArrow
                                    {...getExpansionHandleArrowProps()}
                                    theme={theme}
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
