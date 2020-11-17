import React, {
    FunctionComponent,
    forwardRef,
    Fragment,
    MouseEvent,
} from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useNavigationClassNames } from './utils/useNavigationClassNames';
import { useNavigation } from './utils/useNavigation';
import { NavigationRoot } from './style';
import { NavigationMenuElement, NavigationPropsType } from './type';
import { navigationDefaultTheme } from './theme';
import { NAVIGATION_CLASS_PREFIX, DEFAULT_MAX_DEPTH_LEVEL } from './constants';
import { Menu, MenuElement } from '../Menu';
import { ScalarType } from '../../type';

const isElementInState = (
    element: NavigationMenuElement,
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
    element: NavigationMenuElement,
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
                depthlevel={depthLevel}
                expanded={elementExpanded}
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
                    {element.items!.map(subItem =>
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

export const Navigation: FunctionComponent<NavigationPropsType> = forwardRef(
    function Navigation(
        {
            className,
            classNames,
            enableBottomSeparator,
            enableEffects,
            selectedElementIds,
            expandedElementIds,
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
            onMenuElementClick,
            items,
            maxDepthLevel,
            restRootProps,
        } = useNavigation(restProps);

        return (
            <NavigationRoot
                {...restRootProps}
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
