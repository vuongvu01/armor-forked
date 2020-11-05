import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useMenuClassNames } from './utils/useMenuClassNames';
import { MenuRoot } from './style';
import { MenuPropsType } from './type';
import { menuDefaultTheme } from './theme';
import { MENU_CLASS_PREFIX } from './constants';

export const Menu: FunctionComponent<MenuPropsType> = forwardRef(function Menu(
    { className, classNames, ...restProps },
    ref,
) {
    const theme = useComponentTheme(MENU_CLASS_PREFIX, menuDefaultTheme);
    const classNameComponents = useMenuClassNames(
        MENU_CLASS_PREFIX,
        className,
        classNames,
    );

    return (
        <MenuRoot
            {...restProps}
            theme={theme}
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
