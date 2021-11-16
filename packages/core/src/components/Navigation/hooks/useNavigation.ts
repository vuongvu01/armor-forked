import { useCallback, MouseEvent, useMemo } from 'react';
import { consoleWarn, ScalarType } from '@deliveryhero/armor-system';

import { NavigationMenuElementType, NavigationPropsType } from '../type';
import { ObjectLiteralType } from '../../../type';
import { DEFAULT_MAX_DEPTH_LEVEL } from '../constants';

export const useNavigation = ({
    items: menuItems,
    maxDepthLevel,
    onElementClick,
    ...restRootProps
}: NavigationPropsType) => {
    const references = useMemo(() => {
        const result: ObjectLiteralType<NavigationMenuElementType> = {};

        if (!menuItems) {
            return result;
        }

        let nestingErrorDisplayed = false;

        const traverse = (
            items?: NavigationMenuElementType[],
            path = '',
            parentId: ScalarType = '',
            depthLevel = 0,
        ) => {
            if (!items) {
                return;
            }

            if (depthLevel >= (maxDepthLevel || DEFAULT_MAX_DEPTH_LEVEL)) {
                if (!nestingErrorDisplayed) {
                    consoleWarn('Too deep nesting in the SideNavigation.');
                }
                nestingErrorDisplayed = true;
                return;
            }

            for (let i = 0; i < items.length; i += 1) {
                const item = items[i];

                const globalId = `${parentId}.${item.id}`;
                result[globalId] = items[i];

                traverse(item.items, path, globalId, depthLevel + 1);
            }
        };

        traverse(menuItems);

        return result;
    }, [menuItems, maxDepthLevel]);

    const onMenuElementClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            const itemNode = event.currentTarget as HTMLElement;
            const itemId = itemNode.getAttribute('data-menuelementid');
            const itemGlobalId = itemNode.getAttribute(
                'data-menuelementglobalid',
            );

            if (!itemId || !itemGlobalId) {
                return;
            }

            const itemReference = references[itemGlobalId];
            if (!itemReference) {
                return;
            }

            if (
                itemReference.menuElementProps &&
                itemReference.menuElementProps.onClick
            ) {
                itemReference.menuElementProps.onClick(event);
            }

            if (event.isPropagationStopped()) {
                return;
            }

            if (onElementClick) {
                onElementClick(itemId, itemReference);
            }
        },
        [onElementClick, references],
    );

    return {
        onMenuElementClick,
        items: menuItems,
        maxDepthLevel,
        restRootProps,
    };
};
