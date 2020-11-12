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
import { menuElementDefaultTheme } from './theme';
import { MENU_ELEMENT_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';

export const MenuElement: FunctionComponent<MenuElementPropsType> = forwardRef(
    function MenuElement(
        {
            className,
            classNames,
            enableExpansionHandle,
            expanded,
            children,
            primary,
            secondary,
            tertiary,
            depthLevel,
            tag: Tag = 'div',
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            MENU_ELEMENT_CLASS_PREFIX,
            menuElementDefaultTheme,
        );
        const classNameComponents = useMenuElementClassNames(
            MENU_ELEMENT_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <MenuElementRoot
                {...restProps}
                primary={primary}
                secondary={secondary}
                tertiary={tertiary}
                depthLevel={depthLevel}
                enableExpansionHandle={enableExpansionHandle}
                expanded={expanded}
                theme={theme}
                className={classNameComponents.Root}
                aria-expanded={expanded ? 'true' : 'false'}
            >
                {(forwardedProps: ButtonPropsType) => (
                    <Tag {...forwardedProps} ref={ref}>
                        <MenuElementContent
                            theme={theme}
                            className={classNameComponents.Content}
                        >
                            {children}
                        </MenuElementContent>
                        {enableExpansionHandle && (
                            <MenuElementExpansionHandle
                                theme={theme}
                                className={classNameComponents.ExpansionHandle}
                                primary={primary}
                                secondary={secondary}
                                tertiary={tertiary}
                                depthLevel={depthLevel}
                            >
                                <MenuElementExpansionHandleArrow
                                    expanded={expanded}
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
