import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import {
    SelectorOptionListItemIconContainer,
    SelectorOptionListItemLabelRoot,
    SelectorOptionListItemLabelContainer,
    SelectorOptionListItemLabel,
    SelectorOptionListItemLabelWrapper,
    SelectorOptionListItemIconWrapper,
} from './style';
import {
    HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
    HEADER_NAVIGATION_SELECTOR_ITEM_ROOT,
} from './constants';
import { useHeaderNavigationSelectorClassName } from './hooks';
import { HeaderNavigationSelectorOptionsListItemPropsType } from './type';

/**
 * # HeaderNavigationSelectorItem
 *
 * @armor-docs-component
 */
export const HeaderNavigationSelectorItem = forwardRef<
    HTMLDivElement,
    HeaderNavigationSelectorOptionsListItemPropsType
>(function HeaderNavigationSelectorItem({ icon, label }, ref) {
    const classOverride = useHeaderNavigationSelectorClassName(
        HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
    );

    return (
        <SelectorOptionListItemLabelRoot
            className={classOverride.OptionListItem}
            ref={ref}
            isIconPresent={!!icon}
        >
            <SelectorOptionListItemLabelWrapper
                className={classOverride.OptionListItemWrapper}
            >
                {icon && (
                    <SelectorOptionListItemIconWrapper>
                        <SelectorOptionListItemIconContainer>
                            {icon}
                        </SelectorOptionListItemIconContainer>
                    </SelectorOptionListItemIconWrapper>
                )}
                <SelectorOptionListItemLabelContainer>
                    <SelectorOptionListItemLabel>
                        {label}
                    </SelectorOptionListItemLabel>
                </SelectorOptionListItemLabelContainer>
            </SelectorOptionListItemLabelWrapper>
        </SelectorOptionListItemLabelRoot>
    );
});

HeaderNavigationSelectorItem.displayName = HEADER_NAVIGATION_SELECTOR_ITEM_ROOT;

HeaderNavigationSelectorItem.defaultProps = {
    icon: null,
    label: '',
};

HeaderNavigationSelectorItem.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
};

export const MemoizedHeaderNavigationSelectorItem = memo(
    HeaderNavigationSelectorItem,
);
