import React, { forwardRef, Fragment, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme, ScalarType } from '@deliveryhero/armor-system';

import { useNavigationClassNames } from './hooks/useNavigationClassNames';
import { useNavigation } from './hooks/useNavigation';
import { NavigationRoot } from './style';
import { NavigationMenuElementType, NavigationPropsType } from './type';
import { NAVIGATION_CLASS_PREFIX, DEFAULT_MAX_DEPTH_LEVEL } from './constants';
import { Menu, MenuElement } from '../Menu';

const isElementInState = (
    element: NavigationMenuElementType,
    stateName: 'expanded' | 'selected',
    elementIds?: ScalarType[],
) => {
    if (element[stateName] !== undefined) {
        return element[stateName];
    }

    if (elementIds) {
        return elementIds.includes(element.id);
    }

    return false;
};

const renderMenuElement = (
    element: NavigationMenuElementType,
    depthLevel: number,
    maxDepthLevel = DEFAULT_MAX_DEPTH_LEVEL,
    parentId = '',
    enableEffects = false,
    onMenuElementClick: (event: MouseEvent<HTMLDivElement>) => void,
    selectedElementIds: NavigationPropsType['selectedElementIds'],
    expandedElementIds: NavigationPropsType['expandedElementIds'],
) => {
    if (depthLevel >= maxDepthLevel) {
        return null;
    }

    const hasChildren = !!(element.items && element.items.length);
    const globalId = `${parentId}.${element.id}`;

    const elementExpanded = isElementInState(
        element,
        'expanded',
        expandedElementIds,
    );
    const elementSelected = isElementInState(
        element,
        'selected',
        selectedElementIds,
    );

    return (
        <Fragment key={element.id}>
            <MenuElement
                {...element.menuElementProps}
                enableExpansionHandle={hasChildren}
                secondary={depthLevel === 1}
                tertiary={depthLevel > 1}
                data-menuelementid={element.id}
                data-menuelementglobalid={globalId}
                data-depthlevel={depthLevel}
                depthLevel={depthLevel}
                expanded={elementExpanded}
                data-expanded={elementExpanded}
                selected={elementSelected}
                onClick={onMenuElementClick}
            >
                {element.label}
            </MenuElement>
            {element.beforeMenu}
            {hasChildren && (
                <Menu
                    secondary={depthLevel === 0}
                    tertiary={depthLevel > 0}
                    expanded={elementExpanded}
                    enableEffects={enableEffects}
                >
                    {element.beforeItems}
                    {element.items!.map((subItem) =>
                        renderMenuElement(
                            subItem,
                            depthLevel + 1,
                            maxDepthLevel,
                            globalId,
                            enableEffects,
                            onMenuElementClick,
                            selectedElementIds,
                            expandedElementIds,
                        ),
                    )}
                    {element.afterItems}
                </Menu>
            )}
            {element.afterMenu}
        </Fragment>
    );
};

/**
 * @armor-docs-component
 */
export const Navigation = forwardRef<HTMLDivElement, NavigationPropsType>(
    function Navigation(
        {
            className,
            enableBottomSeparator,
            enableEffects,
            selectedElementIds,
            expandedElementIds,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(NAVIGATION_CLASS_PREFIX);
        const classNameComponents = useNavigationClassNames(
            NAVIGATION_CLASS_PREFIX,
            className,
        );

        const { onMenuElementClick, items, maxDepthLevel, restRootProps } =
            useNavigation(restProps);

        return (
            <NavigationRoot
                {...restRootProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                <Menu enableBottomSeparator={enableBottomSeparator}>
                    {!!items &&
                        items.map((item) =>
                            renderMenuElement(
                                item,
                                0,
                                maxDepthLevel,
                                '',
                                enableEffects,
                                onMenuElementClick,
                                selectedElementIds,
                                expandedElementIds,
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
