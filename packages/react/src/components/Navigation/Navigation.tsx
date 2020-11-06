import React, { FunctionComponent, forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useNavigationClassNames } from './utils/useNavigationClassNames';
import { useNavigation } from './utils/useNavigation';
import { NavigationRoot } from './style';
import { NavigationMenuElement, NavigationPropsType } from './type';
import { navigationDefaultTheme } from './theme';
import { NAVIGATION_CLASS_PREFIX, DEFAULT_MAX_DEPTH_LEVEL } from './constants';
import { Menu, MenuElement } from '../Menu';

const renderMenuElement = (
    item: NavigationMenuElement,
    depthLevel: number,
    maxDepthLevel = DEFAULT_MAX_DEPTH_LEVEL,
    parentId = '',
    enableEffects = false,
) => {
    if (depthLevel >= maxDepthLevel) {
        return null;
    }

    const hasChildren = !!(item.items && item.items.length);
    const globalId = `${parentId}.${item.id}`;

    return (
        <Fragment key={item.id}>
            <MenuElement
                enableExpansionHandle={hasChildren}
                secondary={depthLevel === 1}
                tertiary={depthLevel > 1}
                data-menuelementid={item.id}
                data-menuelementglobalid={globalId}
                data-depthlevel={depthLevel}
                expanded={item.expanded}
                selected={item.selected}
                {...item.menuElementProps}
            >
                {item.label}
            </MenuElement>
            {hasChildren && (
                <Menu
                    secondary={depthLevel === 0}
                    tertiary={depthLevel > 0}
                    expanded={item.expanded}
                    enableEffects={enableEffects}
                >
                    {item.beforeItems}
                    {item.items!.map(subItem =>
                        renderMenuElement(
                            subItem,
                            depthLevel + 1,
                            maxDepthLevel,
                            globalId,
                            enableEffects,
                        ),
                    )}
                    {item.afterItems}
                </Menu>
            )}
        </Fragment>
    );
};

export const Navigation: FunctionComponent<NavigationPropsType> = forwardRef(
    function Navigation(
        {
            className,
            classNames,
            enableBottomSeparator,
            enableEffects,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            NAVIGATION_CLASS_PREFIX,
            navigationDefaultTheme,
        );
        const classNameComponents = useNavigationClassNames(
            NAVIGATION_CLASS_PREFIX,
            className,
            classNames,
        );

        const {
            onRootClick,
            items,
            maxDepthLevel,
            restRootProps,
        } = useNavigation(restProps);

        return (
            <NavigationRoot
                {...restRootProps}
                onClick={onRootClick}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                <Menu enableBottomSeparator={enableBottomSeparator}>
                    {!!items &&
                        items.map(item =>
                            renderMenuElement(
                                item,
                                0,
                                maxDepthLevel,
                                '',
                                enableEffects,
                            ),
                        )}
                </Menu>
            </NavigationRoot>
        );
    },
);

Navigation.defaultProps = {
    maxDepthLevel: DEFAULT_MAX_DEPTH_LEVEL,
    enableBottomSeparator: false,
    enableEffects: true,
    items: [],
};

/** prop-types are required here for run-time checks */
Navigation.propTypes = {
    // todo: tighten
    maxDepthLevel: PropTypes.number,
    enableBottomSeparator: PropTypes.bool,
};
