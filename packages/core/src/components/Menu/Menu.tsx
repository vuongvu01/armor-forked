import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useMenuClassNames } from './hooks/useMenuClassNames';
import { MenuRoot } from './style';
import { MenuPropsType } from './type';
import { MENU_CLASS_PREFIX } from './constants';

/**
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
