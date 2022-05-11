import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';
import { makeRootClassName } from '@deliveryhero/armor-system';

import { TabViewPropsType } from './type';
import { TabViewRoot } from './style';
import { TAB_VIEW_CLASS_PREFIX } from './constants';

/**
 * # TabView
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/32f757-tab/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Tabs, Tab, TabView } from '@deliveryhero/armor';
 *
 * const [selectedTabIndex, setSelectedTabIndex] = useState(0);
 * const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);
 *
 * <Tabs onSwitch={handleChange}>
 *     <Tab>Pizza</Tab>
 *     <Tab>Pasta</Tab>
 *     <Tab>Risotto</Tab>
 *     <Tab>Beverages</Tab>
 *     <Tab>Alcoholic beverages</Tab>
 * </Tabs>
 * <TabView value={0} selectedValue={selectedTabIndex}>
 *     <p>Pizza</p>
 * </TabView>
 * <TabView value={1} selectedValue={selectedTabIndex}>
 *     <p>Pasta</p>
 * </TabView>
 * <TabView value={2} selectedValue={selectedTabIndex}>
 *     <p>Risotto</p>
 * </TabView>
 * <TabView value={3} selectedValue={selectedTabIndex}>
 *     <p>Beverages</p>
 * </TabView>
 * <TabView value={4} selectedValue={selectedTabIndex}>
 *     <p>Alcoholic beverages</p>
 * </TabView>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const TabView: FC<TabViewPropsType> = ({
    children,
    value,
    selectedValue,
    className,
    ...restProps
}) => {
    if (typeof value === 'undefined' || typeof selectedValue === 'undefined') {
        return null;
    }

    return value === selectedValue ? (
        <TabViewRoot
            {...restProps}
            className={makeRootClassName(TAB_VIEW_CLASS_PREFIX, className)}
        >
            {children}
        </TabViewRoot>
    ) : null;
};

TabView.displayName = TAB_VIEW_CLASS_PREFIX;

TabView.propTypes = {
    id: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.number,
};

export const MemoizedTabView = memo(TabView);
