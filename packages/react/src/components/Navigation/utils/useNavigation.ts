import { useCallback, MouseEvent, useMemo } from 'react';
import { NavigationMenuElement, NavigationPropsType } from '../type';
import { ObjectLiteralType, ScalarType } from '../../../type';
import { consoleWarn } from '../../../system/util/consoleWarn';
import { DEFAULT_MAX_DEPTH_LEVEL } from '../constants';

const findMenuElement = (node: HTMLElement) => {
    let currentNode: HTMLElement | null = node;
    let failSafe = 0;
    while (currentNode) {
        if (failSafe > 30) {
            consoleWarn('Unable to find .MenuElement-Root: too deep nesting');
            return null;
        }

        if (currentNode.classList.contains('MenuElement-Root')) {
            return currentNode;
        }
        if (currentNode.classList.contains('Menu-Root')) {
            break;
        }

        failSafe += 1;
        currentNode = node.parentElement;
    }

    return null;
};

export const useNavigation = ({
    onClick,
    items: menuItems,
    maxDepthLevel,
    onElementClick,
    ...restRootProps
}: NavigationPropsType) => {
    const references = useMemo(() => {
        const result: ObjectLiteralType<NavigationMenuElement> = {};

        if (!menuItems) {
            return result;
        }

        let nestingErrorDisplayed = false;

        const traverse = (
            items?: NavigationMenuElement[],
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

    const onRootClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (onClick) {
                onClick(event);
            }

            if (event.isPropagationStopped()) {
                return;
            }

            if (!onElementClick) {
                return;
            }

            const itemNode = findMenuElement(event.target as HTMLElement);
            if (itemNode) {
                const itemId = itemNode.getAttribute('data-menuelementid');
                const itemGlobalId = itemNode.getAttribute(
                    'data-menuelementglobalid',
                );
                if (itemId && itemGlobalId) {
                    const reference = references[itemGlobalId];
                    onElementClick(itemId, reference);
                }
            }
        },
        [onElementClick, references],
    );

    return {
        onRootClick,
        items: menuItems,
        maxDepthLevel,
        restRootProps,
    };
};
