import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useMenuClassNames } from './hooks/useMenuClassNames';
import { MenuRoot } from './style';
import { MenuPropsType } from './type';
import { MENU_CLASS_PREFIX } from './constants';

/**
 * # Menu
 *
 * They are containers to display the items as a single line of list.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/390d51-menu/b/04b17e)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Menu, MenuElement } from '@deliveryhero/armor';
 *
 * <Menu>
 *     <MenuElement>
 *         Soup
 *     </MenuElement>
 *     <MenuElement selected>
 *         Cookies
 *     </MenuElement>
 *     <MenuElement>
 *         Stew
 *     </MenuElement>
 * </Menu>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Menu = forwardRef<HTMLDivElement, MenuPropsType>(function Menu(
    { className, ...restProps },
    ref,
) {
    const classNameComponents = useMenuClassNames(MENU_CLASS_PREFIX, className);

    return (
        <MenuRoot
            {...restProps}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

Menu.defaultProps = {
    enableBottomSeparator: false,
    enableEffects: true,
};

/** prop-types are required here for run-time checks */
Menu.propTypes = {
    enableBottomSeparator: PropTypes.bool,
};
